const workoutHistory = require('../data/raw_workout_history');

exports.seed = (knex, Promise)=>{
  let usersWorkouts = workoutHistory.map((singleWorkout,index)=>{
    return {
      user_id: 1,
      workout_id: index+1
    }
  })
  return knex('users_workouts').del()
    .then( ()=>{
      return knex('users_workouts').insert(usersWorkouts);
    });
};
