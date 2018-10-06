exports.up = (knex, Promise)=> {
  return knex.schema.createTable('users',(table)=>{
    table.increments('user_id');
    // table.primary('user_id').unique();
    table.string('email').unique();
    table.string('password');
    //this is how everything **SHOULD** work
    //AKA --> storing passwords in plain text is clearly WRONG!
    // table.string('hashed_password')
    // table.string('hashed_salt');
  })
  .catch((err)=>{
    console.error('error from user migration',err);
  })  
};

exports.down = (knex, Promise)=> {
  return knex.schema.dropTable('users');
};
