exports.up = (knex, Promise)=>{
  return knex.schema.createTable('users_workouts',(table)=>{
    table.integer('user_id');
    table.integer('workout_id');
    // table.increments('workout_id');
  })
};

exports.down = (knex, Promise)=>{
  return knex.schema.dropTable('users_workouts')
};
