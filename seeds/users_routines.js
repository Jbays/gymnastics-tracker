exports.seed = (knex, Promise)=>{
  return knex('users_routines').del()
    .then( ()=>{
      return knex('users_routines').insert([
        {user_id: 1, routine_id:1,timestamp:'2018-03-30',progression_id:10,routine_note:'thoracic bridge 0' },
        {user_id: 1, routine_id:2,timestamp:'2018-04-29',progression_id:10,routine_note:'thoracic bridge 1' },
        {user_id: 1, routine_id:3,timestamp:'2018-05-28',progression_id:10,routine_note:'thoracic bridge 2' },
        {user_id: 1, routine_id:4,timestamp:'2018-06-28',progression_id:9,routine_note:'middle split 0' },
        {user_id: 1, routine_id:5,timestamp:'2018-07-28',progression_id:8,routine_note:'front split 0' },
        {user_id: 1, routine_id:6,timestamp:'2018-07-29',progression_id:9,routine_note:'middle split 1' },
        {user_id: 1, routine_id:7,timestamp:'2018-08-29',progression_id:8,routine_note:'front split 1' },
        {user_id: 1, routine_id:8,timestamp:'2018-08-30',progression_id:9,routine_note:'middle split 2' },
        {user_id: 1, routine_id:9,timestamp:'2018-09-30',progression_id:8,routine_note:'front split 2' },
      ]);
    });
};
