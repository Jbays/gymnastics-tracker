const config = require('../knexfile')['development'];
const knex = require('knex')(config);

//this works and pulls all the raw data I need!
knex.select(
  'timestamp',
  'workouts.progression_id',
  'exercise_id_strength',
  'mastery_id_strength',
  'exercise_id_mobility',
  'mastery_id_mobility',
  'workouts.step_sequence',
  'completed')
  .from('workouts')
  .join('progressions_exercises_mastery',function(){
    this.on('workouts.progression_id','=','progressions_exercises_mastery.progression_id')
      .andOn('workouts.sequence_number','=','progressions_exercises_mastery.sequence_number');
  })
  .then((response)=>{
    console.log('response',response);
  })

//gets all workout history
// knex('workouts').select().then((response)=>{
//   console.log('this is response',response);
// })