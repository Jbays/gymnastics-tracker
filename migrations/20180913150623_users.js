exports.up = (knex, Promise)=> {
  return knex.schema.createTable('users',(table)=>{
    table.increments().primary('user_id');
    table.string('email');
  })
  .catch((err)=>{
    console.error('error from user migration',err);
  })  
};

exports.down = (knex, Promise)=> {
  return knex.schema.dropTable('users');
};
