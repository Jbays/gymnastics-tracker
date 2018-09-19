exports.seed = (knex, Promise)=>{
  return knex('steps').del()
    .then( ()=>{
      return knex('steps').insert([
        {step_id:9,proficiency_standard:"5x1r",sets:5,reps:1,secs:null,step_sequence:9,each_side:false},
        {step_id:18,proficiency_standard:"5x3r",sets:5,reps:3,secs:null,step_sequence:9,each_side:false},
        {step_id:27,proficiency_standard:"5x5r",sets:5,reps:5,secs:null,step_sequence:9,each_side:false},
        {step_id:36,proficiency_standard:"5x5r@",sets:5,reps:5,secs:null,step_sequence:9,each_side:true},
        {step_id:45,proficiency_standard:"5x10r",sets:5,reps:10,secs:null,step_sequence:9,each_side:false},
        {step_id:54,proficiency_standard:"5x15r",sets:5,reps:15,secs:null,step_sequence:9,each_side:false},
        {step_id:63,proficiency_standard:"5x30r",sets:5,reps:30,secs:null,step_sequence:9,each_side:false},
        {step_id:72,proficiency_standard:"5x60r",sets:5,reps:60,secs:null,step_sequence:9,each_side:false},
        {step_id:81,proficiency_standard:"5x10s",sets:5,reps:null,secs:10,step_sequence:9,each_side:false},
        {step_id:90,proficiency_standard:"5x5rx10s",sets:5,reps:5,secs:10,step_sequence:9,each_side:false},
        {step_id:99,proficiency_standard:"5x5rx10s@",sets:5,reps:5,secs:10,step_sequence:9,each_side:true},
        {step_id:108,proficiency_standard:"5x15s@",sets:5,reps:null,secs:15,step_sequence:9,each_side:true},
        {step_id:117,proficiency_standard:"5x30s",sets:5,reps:null,secs:30,step_sequence:9,each_side:false},
        {step_id:126,proficiency_standard:"5x30s@",sets:5,reps:null,secs:30,step_sequence:9,each_side:true},
        {step_id:135,proficiency_standard:"5x60s",sets:5,reps:null,secs:60,step_sequence:9,each_side:false},
        //rope climb is an edge case.
        //this step for rope climb is 5 sets of 5 reps 2 rope climbs per rep
        {step_id:144,proficiency_standard:"5x5/2 RC",sets:5,reps:5,secs:null,step_sequence:9,each_side:false},
        //this step for rope climb is 5 sets of 5 reps 5 rope climbs per rep
        {step_id:153,proficiency_standard:"5x5/4 RC",sets:5,reps:5,secs:null,step_sequence:9,each_side:false},
      ]);
    });
  };