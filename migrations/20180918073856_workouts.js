exports.up = (knex, Promise)=> {
  return knex.schema.createTable('workouts',(table)=>{
    table.integer('workout_id').unique();
    // table.integer('user_id');
    table.timestamp('timestamp');
    table.integer('progression_id');
    table.integer('sequence_number');
    table.integer('step_id');
    table.boolean('completed');
    table.string('workout_note');
  })
  .catch((err)=>{
    console.error('error from user migration',err);
  })  
};

exports.down = (knex, Promise)=> {
  return knex.schema.dropTable('workouts');
};
