exports.seed = (knex, Promise) =>{
  return knex('stretches_progressions_mastery').del()
    .then( () =>{
      return knex('stretches_progressions_mastery').insert([
        {progression_id: 1, exercise_id: 350,stretch_sequence:1,mastery_id:19},
      ]);
    });
};
