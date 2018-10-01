exports.up = (knex, Promise)=>{
  return knex.schema.createTable('progressions_types',(table)=>{
    table.integer('progression_type_id');
    table.string('progression_type');
  })
  .catch((err)=>{
    console.error('migration error with progressions_types table',err);
  })
};

exports.down = (knex, Promise)=>{ 
  return knex.schema.dropTable('progressions_types');
};
