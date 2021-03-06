exports.up = (knex, Promise)=> {
  return knex.schema.createTable('progressions',(table)=>{
    table.integer('progression_id').unsigned();
    table.string('progression_name');
    table.integer('progression_type_id');
  })
  .catch((err)=>{
    console.error('migration error with progressions table',err);
  })
};

exports.down = (knex, Promise)=> {
  return knex.schema.dropTable('progressions');
};
