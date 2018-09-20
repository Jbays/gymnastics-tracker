exports.seed = (knex, Promise)=>{
  return knex('steps').del()
    .then( ()=>{
      return knex('steps').insert([
        //may not need step_id
        {step_id:9,mastery_id:1,sets:5,reps:1,secs:null,step_sequence:9},
        {step_id:18,mastery_id:2,sets:5,reps:3,secs:null,step_sequence:9},
        {step_id:27,mastery_id:3,sets:5,reps:5,secs:null,step_sequence:9},
        {step_id:36,mastery_id:4,sets:5,reps:5,secs:null,step_sequence:9},
        {step_id:45,mastery_id:5,sets:5,reps:10,secs:null,step_sequence:9},
        {step_id:54,mastery_id:6,sets:5,reps:15,secs:null,step_sequence:9},
        {step_id:63,mastery_id:7,sets:5,reps:30,secs:null,step_sequence:9},
        {step_id:72,mastery_id:8,sets:5,reps:60,secs:null,step_sequence:9},
        {step_id:81,mastery_id:9,sets:5,reps:null,secs:10,step_sequence:9},
        {step_id:90,mastery_id:10,sets:5,reps:5,secs:10,step_sequence:9},
        {step_id:99,mastery_id:11,sets:5,reps:5,secs:10,step_sequence:9},
        {step_id:108,mastery_id:12,sets:5,reps:null,secs:15,step_sequence:9},
        {step_id:117,mastery_id:13,sets:5,reps:null,secs:30,step_sequence:9},
        {step_id:126,mastery_id:14,sets:5,reps:null,secs:30,step_sequence:9},
        {step_id:135,mastery_id:15,sets:5,reps:null,secs:60,step_sequence:9},
        //rope climb is an edge case.
        //this step for rope climb is 5 sets of 5 reps 2 rope climbs per rep
        {step_id:144,mastery_id:16,sets:5,reps:5,secs:null,step_sequence:9},
        //this step for rope climb is 5 sets of 5 reps 5 rope climbs per rep
        {step_id:153,mastery_id:17,sets:5,reps:5,secs:null,step_sequence:9},
      ]);
    });
};
