exports.seed = (knex, Promise)=>{
  return knex('users').del()
    .then( ()=>{
      return knex('users').insert([
        {user_id: 1, email: 'jjbaize@gmail.com',password:'asdf'},
        {user_id: 2, email: 'i.p.freely@gmail.com',password:'sdfg'},
        {user_id: 3, email: 'amandahugginkiss@gmail.com',password:'dfgh'},
        {user_id: 4, email: 'asdf@gmail.com',password:'pick'}
        
        //here's sample data!
        // {user_id: 1, email: 'jjbaize@gmail.com',hashed_password:'asdf',hashed_salt:''},
        // {user_id: 2, email: 'i.p.freely@gmail.com',hashed_password:'jkl;',hashed_salt:''},
        // {user_id: 3, email: 'amandahugginkiss@gmail.com',hashed_password:'zxcv',hashed_salt:''},
        // {user_id: 4, email: 'asdf@gmail.com',hashed_password:'$2b$10$O9IU.3bkGv86crBqwxWYq.vJn8s.dMn7X6tf/GtQk6xTY6zXnMhmS',hashed_salt:'$2b$10$O9IU.3bkGv86crBqwxWYq.G4.VfkvFZ8558pOU49BACspbs3bmR1W'},
      ]);
    });
};
