const config = require('../knexfile')['development'];
const knex = require('knex')(config);
const fs = require('fs');

//progressions
knex('progressions')
  .select()
  .then((allProgressions)=>{
    let allProgressionObj = arrayToObj(allProgressions,'progression_id','progression_name');
    const progressionFileData = 'const ALL_PROGRESSIONS_IN_PLAIN_LANGUAGE = '+ JSON.stringify(allProgressionObj) + '\nmodule.exports = ALL_PROGRESSIONS_IN_PLAIN_LANGUAGE';
    
    fs.writeFile('data/progressions_PL.js',progressionFileData,(err)=>{
      if(err){console.error(err)};
      console.log('All progressions written to an object in plain language');
    })
    // knex.destroy();
  })
  .then(()=>{
    //mastery
    return knex('mastery')
      .select()
      .then((allMastery)=>{
        let allMasteryObj = arrayToObj(allMastery,'mastery_id','proficiency_standard');
        const masteryFileData = 'const ALL_MASTERY_IN_PLAIN_LANGUAGE = ' + JSON.stringify(allMasteryObj) + '\nmodule.exports = ALL_MASTERY_IN_PLAIN_LANGUAGE';
        
        fs.writeFile('data/mastery_PL.js',masteryFileData,(err)=>{
          if(err){console.error(err)};
          console.log('All mastery written to an object in plain language');
        })
      })
    })
  .then(()=>{
    //exercises
    return knex('exercises')
      .select()
      .then((allExercises)=>{
        let allExercisesObj = arrayToObj(allExercises,'exercise_id','exercise_name');
        const exercisesFileData = 'const ALL_EXERCISES_IN_PLAIN_LANGUAGE = ' + JSON.stringify(allExercisesObj) + '\nmodule.exports = ALL_EXERCISES_IN_PLAIN_LANGUAGE';

        fs.writeFile('data/exercises_PL.js',exercisesFileData,(err)=>{
          if(err){console.error(err)};
          console.log('All exercises written to an object in plain language')
        })
      })
  .then(()=>{
    knex.destroy();
    console.log('all done!');
  })
})

//converts array to a giant object with keys = keyName's value and values = valueName's value
function arrayToObj(array,keyName,valueName){
  return array.reduce((first,second)=>{
    first[second[keyName]] = second[valueName];
    return first;
  },{})
}