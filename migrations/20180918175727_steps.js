exports.up = (knex, Promise)=>{
  return knex.schema.createTable('steps',(table)=>{
    table.integer('step_id');
    table.string('proficiency_standard');
    table.integer('sets').notNullable();
    table.integer('reps');
    table.integer('secs');
    table.integer('step_sequence');
    table.boolean('each_side');
  })
};

exports.down = (knex, Promise)=>{
  return knex.schema.dropTable('steps');
};
