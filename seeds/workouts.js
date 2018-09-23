const workoutHistory = require('../data/raw_workout_history');

exports.seed = (knex, Promise) =>{
  return knex('workouts').del()
    .then( () =>{
      let addWorkoutId = workoutHistory.map((singleWorkout,index)=>{
        singleWorkout.workout_id = index+1;
        return singleWorkout;
      })
      return knex('workouts').insert(addWorkoutId);
    });
};