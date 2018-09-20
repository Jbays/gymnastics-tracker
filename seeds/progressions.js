exports.seed = function(knex, Promise) {
  return knex('progressions').del()
    .then(()=>{
      return knex('progressions').insert([
        {progression_id: 1, progression_name: 'single leg squat'},
        {progression_id: 2, progression_name: 'front lever'},
        {progression_id: 3, progression_name: 'side lever'},
        {progression_id: 4, progression_name: 'straddle planche'},
        {progression_id: 5, progression_name: 'hollow back press'},
        {progression_id: 6, progression_name: 'manna'},
        {progression_id: 7, progression_name: 'rope climb'},
      ]);
    });
};
