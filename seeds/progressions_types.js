exports.seed = (knex, Promise)=>{
  return knex('progressions_types').del()
    .then( ()=>{
      return knex('progressions_types').insert([
        {progression_type_id: 1, progression_type: 'foundation'},
        {progression_type_id: 2, progression_type: 'stretch'},
      ]);
    });
};
