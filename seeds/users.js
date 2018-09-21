exports.seed = (knex, Promise)=>{
  return knex('users').del()
    .then( ()=>{
      return knex('users').insert([
        {user_id: 1, email: 'jjbaize@gmail.com'},
        {user_id: 2, email: 'i.p.freely@gmail.com'},
        {user_id: 3, email: 'amandahugginkiss@gmail.com'},
      ]);
    });
};
