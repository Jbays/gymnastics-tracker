exports.up = (knex, Promise)=>{
  return knex.schema.createTable('mastery',(table)=>{
    table.integer('mastery_id');
    table.string('proficiency_standard');
    table.boolean('each_side');
  })
};

exports.down = (knex, Promise)=>{
  return knex.schema.dropTable('mastery');
};
