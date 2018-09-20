exports.up = (knex, Promise)=>{
  return knex.schema.createTable('progressions_exercises',(table)=>{
    table.integer('progression_id').unsigned();
    // table.foreign('progressions_id').references('progressions_id').inTable('progressions');
    
    table.integer('exercise_id_strength').unsigned();
    table.integer('mastery_id_strength').unsigned();
    table.integer('exercise_id_mobility').unsigned();
    table.integer('mastery_id_mobility').unsigned();
    
    // table.foreign('exercise_id').references('exercise_id').inTable('exercises');
    table.integer('sequence_number').unsigned();
    
  })
};

exports.down = (knex, Promise)=>{
  return knex.schema.dropTable('progressions_exercises');
};
