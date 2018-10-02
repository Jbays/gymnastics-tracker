
exports.up = (knex, Promise)=>{
  return knex.schema.createTable('routines',(table)=>{
    table.integer('routine_id');
    table.integer('stretch_sequence');
    table.boolean('completed');
  })
};

exports.down = (knex, Promise)=>{
  return knex.schema.dropTable('routines');
};
