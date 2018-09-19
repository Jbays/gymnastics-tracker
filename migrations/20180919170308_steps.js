exports.up = (knex, Promise)=>{
  return knex.schema.createTable('steps',(table)=>{
    table.integer('step_id');
    table.integer('mastery_id');
    table.integer('sets').notNullable();
    table.integer('reps');
    table.integer('secs');
    table.integer('step_sequence');
  })
};

exports.down = (knex, Promise)=>{
  return knex.schema.dropTable('steps');
};