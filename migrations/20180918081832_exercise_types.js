exports.up = (knex, Promise)=>{
  return knex.schema.createTable('exercise_types',(table)=>{
    table.integer('exercise_type_id');
    table.string('exercise_type');
  })
  .catch((err)=>{
    console.error('migration error with exercise_types table',err);
  })
};

exports.down = (knex, Promise)=>{ 
  return knex.schema.dropTable('exercise_types');
};
