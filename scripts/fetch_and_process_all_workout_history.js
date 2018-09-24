const config = require('../knexfile')['development'];
const knex = require('knex')(config);

//this works and pulls all the raw data I need!
knex.select(
  'timestamp',
  'progression_name',
  'exercise_id_strength',
  'mastery_id_strength',
  'exercise_id_mobility',
  'mastery_id_mobility',
  'workouts.step_sequence',
  'completed',
)
.from('workouts')
.join('progressions_exercises_mastery',function(){
  this.on('workouts.progression_id','=','progressions_exercises_mastery.progression_id')
    .andOn('workouts.sequence_number','=','progressions_exercises_mastery.sequence_number');
})
.join('progressions','workouts.progression_id','=','progressions.progression_id')
//this works! -- KINDA
// .join('steps',function(){
//   this.on('workouts.step_sequence','=','steps.step_sequence')
//     .andOn('progressions_exercises_mastery.mastery_id_strength','=','steps.mastery_id')
//     .andOn('progressions_exercises_mastery.mastery_id_mobility','=','steps.mastery_id')
// })
.then((allRequiredInformation)=>{
  return knex('exercises')
    .select()
    .then((allExercises)=>{
      return [allRequiredInformation,allExercises]
    })
})
.then((allReqInfoAndExercises)=>{
  //NOTE: I don't think I need anything from the mastery table.
  //and maybe a better tableName than 'mastery' is 'masteries' -- to follow the previous naming convention
  return knex('mastery')  
    .select('mastery_id','proficiency_standard')
    .then((allMasteries)=>{
      allReqInfoAndExercises.push(allMasteries)
      return allReqInfoAndExercises
    })
    .then((allReqInfoExercisesAndMasteries)=>{
      return knex('steps')
        .select()
        .then((response)=>{
          knex.destroy();
          allReqInfoExercisesAndMasteries.push(response);
          return allReqInfoExercisesAndMasteries
        })
    })
}).then((everythingNeeded)=>{
  let steps = stepsArrayToObj(everythingNeeded.pop());
  let mastery = arrayToObj(everythingNeeded.pop(),'mastery_id','proficiency_standard');
  let exercises = arrayToObj(everythingNeeded.pop(),'exercise_id','exercise_name');

  everythingNeeded[0].forEach((singleWorkout)=>{
    singleWorkout.exercise_id_strength = exercises[singleWorkout.exercise_id_strength];
    //put clause to catch undefined -- currently my full list of steps is incomplete!
    singleWorkout.mastery_id_strength = steps[singleWorkout.mastery_id_strength][singleWorkout.step_sequence] ? steps[singleWorkout.mastery_id_strength][singleWorkout.step_sequence] : mastery[singleWorkout.mastery_id_strength];
    singleWorkout.exercise_id_mobility = exercises[singleWorkout.exercise_id_mobility];
    //put clause to catch undefined -- currently my full list of steps is incomplete!
    singleWorkout.mastery_id_mobility = steps[singleWorkout.mastery_id_mobility][singleWorkout.step_sequence] ? steps[singleWorkout.mastery_id_mobility][singleWorkout.step_sequence] : mastery[singleWorkout.mastery_id_mobility]
  })

  console.log('the end!',JSON.stringify(everythingNeeded));
});

//converts array of steps objects into one giant object
function stepsArrayToObj(array){
  let output = {};
  
  array.forEach((step)=>{
    if ( !output.hasOwnProperty(step.mastery_id) ){
      output[step.mastery_id] = {};
    }

    if ( !output[step.mastery_id].hasOwnProperty(step.step_sequence) ){
      output[step.mastery_id][step.step_sequence] = {
        sets: step.sets,
        reps: step.reps,
        secs: step.secs,
      }
    }
  });

  return output;
};

//converts array of exercise objects to one giant object
function arrayToObj(array,keyName,valueName){
  return array.reduce((first,second)=>{
    first[second[keyName]] = second[valueName];
    return first;
  },{})
}
