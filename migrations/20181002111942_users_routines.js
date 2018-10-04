
exports.up = (knex, Promise) =>{
  return knex.schema.createTable('users_routines',(table)=>{
    table.integer('user_id');
    table.integer('routine_id');
    table.timestamp('timestamp');
    table.integer('progression_id');
    table.text('routine_note');
  })
};

exports.down = (knex, Promise) =>{
  return knex.schema.dropTable('users_routines');
};
