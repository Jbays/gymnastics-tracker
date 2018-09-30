const rawStretchData = require('../data/raw_stretches_data');
const config = require('../knexfile')['development'];
const knex = require('knex')(config);
const fs = require('fs');

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

function makeSimpleObject(array){
  let output = {};
  output['front split'] = {}
  output['middle split'] = {}
  output['thoracic bridge'] = {}

  console.log(array)

  //I just realized that stretch progression don't really fit
  //in the progessions_exercises_mastery table
  //I think I need a stretches_exercises_mastery table
  //with just three progression_ids.

  //30 SEPT 2018 --> LET ME ADD A TABLE TO THE ERD!
  array.forEach((singleObject)=>{
    console.log("singleObject['front split']",singleObject['front split']);
    console.log("singleObject['front split']",!!singleObject['front split']);
    if ( !!singleObject['front split'] ) {
      output['front split'][singleObject.FIELD1] = {

      }
    }
    // if ( singleObject['middle split'] ) {

    // }
    // if ( singleObject['thoracic bridge'] ) {
      
    // }
  })

  return output;
}

// console.log(rawStretchData);

//fetch all mastery ids above 18
//for each element in rawStretchData
//map to its correct mastery_id
//and give sequence_number
knex('mastery')
  .select()
  .where('mastery_id','>',18)
  .then((allMasteryIds)=>{
    let object = makeSimpleObject(rawStretchData);
    console.log(rawStretchData);
    console.log(allMasteryIds);
    knex.destroy();
  })