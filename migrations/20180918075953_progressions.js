exports.up = (knex, Promise)=> {
  return knex.schema.createTable('progressions',(table)=>{
    table.increments('progression_id');
    table.string('progression_name');
  })
  .catch((err)=>{
    console.error('migration error with progressions table',err);
  })
};

exports.down = (knex, Promise)=> {
  return knex.schema.dropTable('progressions');
};
