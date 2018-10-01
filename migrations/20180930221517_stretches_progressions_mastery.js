exports.up = (knex, Promise)=>{
  return knex.schema.createTable('stretches_progressions_mastery',(table)=>{
    table.integer('progression_id');
    table.integer('exercise_id');
    table.integer('stretch_sequence');
    table.integer('mastery_id');
  })
};

exports.down = (knex, Promise)=>{
  return knex.schema.dropTable('stretches_progressions_mastery');
};
