exports.seed = (knex, Promise) =>{
  return knex('workouts').del()
    .then( () =>{
      return knex('workouts').insert([
        //front lever
        {workout_id:1,timestamp:'19 Feb 2018',progression_id:2,sequence_number:1,step_sequence:1,completed:true,workout_note:''},
        {workout_id:3,timestamp:'26 Feb 2018',progression_id:2,sequence_number:2,step_sequence:1,completed:true,workout_note:''},
        
        //single leg squat
        {workout_id:2,timestamp:'21 Feb 2018',progression_id:1,sequence_number:1,step_sequence:9,completed:true,workout_note:''},
        {workout_id:4,timestamp:'28 Feb 2018',progression_id:1,sequence_number:2,step_sequence:9,completed:true,workout_note:''},
        {workout_id:6,timestamp:'8 Mar 2018',progression_id:1,sequence_number:3,step_sequence:9,completed:true,workout_note:''},
        
        //manna
        {workout_id:5,timestamp:'8 Mar 2018',progression_id:6,sequence_number:1,step_sequence:1,completed:true,workout_note:''},
        {workout_id:7,timestamp:'9 Mar 2018',progression_id:6,sequence_number:1,step_sequence:2,completed:true,workout_note:''},
        {workout_id:8,timestamp:'10 Mar 2018',progression_id:6,sequence_number:1,step_sequence:3,completed:false,workout_note:''},
        {workout_id:9,timestamp:'11 Mar 2018',progression_id:6,sequence_number:1,step_sequence:3,completed:true,workout_note:''},

      ]);
    });
};