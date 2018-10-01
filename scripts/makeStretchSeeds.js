const rawStretchData = require('../data/raw_stretches_data');
const config = require('../knexfile')['development'];
const knex = require('knex')(config);
const _ = require('underscore');
const allExercisesInPlainLanguage = _.invert(require('../data/exercises_PL'));

const fs = require('fs');

const threeStretches = ['front split','middle split','thoracic bridge'];
const stretchesOnBothSides = [
  'kneeling achilles',
  'standing achilles',
  'narrow hurdler block',
  'wide hurdler block',
  'standing single pike',
  'vertical lunge bent',
  'vertical lunge straight',
  'reach underneath',
  'capsule stretch'
];

/*
  outputs object of form:
    stretch_name:{
      stretch_sequence:{
        exercise_name: NAME,
        proficiency_standard: STANDARD
      }
    }
*/

function collectAllSeedData(array,obj){
  let output = {};

  threeStretches.forEach((singleStretch)=>{
    output[singleStretch] = {};
  })

  array.forEach((singleObject)=>{
    threeStretches.forEach((singleStretch)=>{
      if ( !!singleObject[singleStretch].exercise_name ) {
        let exerciseName = singleObject[singleStretch].exercise_name;
        output[singleStretch][singleObject.FIELD1]= {
          exercise_name:exerciseName,
          proficiency_standard:singleObject[singleStretch].duration
        };
        if ( stretchesOnBothSides.indexOf(exerciseName) > -1 ){
          output[singleStretch][singleObject.FIELD1].proficiency_standard += '@';
        }
        //final remap
        output[singleStretch][singleObject.FIELD1].exercise_name = allExercisesInPlainLanguage[exerciseName];
        output[singleStretch][singleObject.FIELD1].proficiency_standard = obj[output[singleStretch][singleObject.FIELD1].proficiency_standard]
      };
    });
  });
  return output;
}

/*
  NOTE: mastery_PL.js exists so that I do NOT have to go knex('mastery') etc!
        Instead, I can directly access the data from an object
*/

//fetch all mastery ids above 18
//for each element in rawStretchData
//map to its correct mastery_id
//and give sequence_number
knex('mastery')
  .select()
  .where('mastery_id','>',18)
  .then((allMasteryIds)=>{
    let masteryToStandardMap = allMasteryIds.reduce((first,second)=>{
      let key = second.proficiency_standard.split('x')[1];
      first[key] = second.mastery_id;
      return first;
    },{})

    //all data is now collected.  Now turn each key-value pair into an object
    //to be inserted into the stretches_progressions_mastery table
    let object = collectAllSeedData(rawStretchData,masteryToStandardMap);
    let outputToFile = [];
    let progression_id = 8;
    //front split     progression_id = 8
    //middle split    progression_id = 9
    //thoracic bridge progression_id = 10
    for ( stretch in object ) {
      for ( sequenceNumber in object[stretch] ) {
        let obj = {
          progression_id,
          exercise_id:null,
          stretch_sequence:null,
          mastery_id:null
        };
        obj.exercise_id = Number(object[stretch][sequenceNumber].exercise_name);
        obj.stretch_sequence = Number(sequenceNumber);
        obj.mastery_id = object[stretch][sequenceNumber].proficiency_standard;
        outputToFile.push(obj);
      };
      progression_id++;
    };

    const writeData = `const ALL_STRETCHES_PROGRESSIONS = ${JSON.stringify(outputToFile)} \n module.exports = ALL_STRETCHES_PROGRESSIONS`;

    fs.writeFile('data/processedStretchSeeds.js',writeData,(err)=>{
      if(err){console.error(err)};
      console.log('seed data written to file!');
    })

    knex.destroy();
  })