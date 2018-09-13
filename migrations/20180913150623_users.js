exports.up = (knex, Promise)=> {
  return knex.schema.createTable('users',(table)=>{
    table.increments('user_id');
    table.string('email');
  })
  .then((response)=>{
    console.log('this is response',response);
  })
  .catch((err)=>{
    console.error('error from user migration',err);
  })  
};

exports.down = (knex, Promise)=> {
  return knex.schema.dropTable('users');
};
