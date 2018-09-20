exports.up = (knex, Promise)=>{
  return knex.schema.createTable('exercises',(table)=>{
    table.integer('exercise_id');
    table.string('exercise_name');
    //this is a foreign key from exercise_types
  })
};

exports.down = (knex, Promise)=>{
  return knex.schema.dropTable('exercises');
};
