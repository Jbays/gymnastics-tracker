exports.seed = function(knex, Promise) {
  return knex('progressions').del()
    .then(()=>{
      return knex('progressions').insert([
        {progression_id: 1, progression_name: 'single leg squat', progression_type_id:1},
        {progression_id: 2, progression_name: 'front lever', progression_type_id:1},
        {progression_id: 3, progression_name: 'side lever', progression_type_id:1},
        {progression_id: 4, progression_name: 'straddle planche', progression_type_id:1},
        {progression_id: 5, progression_name: 'hollow back press', progression_type_id:1},
        {progression_id: 6, progression_name: 'manna', progression_type_id:1},
        {progression_id: 7, progression_name: 'rope climb', progression_type_id:1},
        {progression_id: 8, progression_name: 'front split', progression_type_id:2},
        {progression_id: 9, progression_name: 'middle split', progression_type_id:2},
        {progression_id: 10, progression_name: 'thoracic bridge', progression_type_id:2},
      ]);
    });
};
