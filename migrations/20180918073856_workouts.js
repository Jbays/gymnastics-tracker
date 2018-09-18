exports.up = (knex, Promise)=> {
  return knex.schema.createTable('workouts',(table)=>{
    table.integer('user_id')
    table.integer('workout_id');
    table.timestamp('timestamp');
  })
  .catch((err)=>{
    console.error('error from user migration',err);
  })  
};

exports.down = (knex, Promise)=> {
  return knex.schema.dropTable('workouts');
};
