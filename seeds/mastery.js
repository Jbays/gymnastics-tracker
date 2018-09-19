exports.seed = (knex, Promise)=>{
  return knex('mastery').del()
    .then( ()=>{
      return knex('mastery').insert([
        {mastery_id:1,proficiency_standard:"5x1r",each_side:false},
        {mastery_id:2,proficiency_standard:"5x3r",each_side:false},
        {mastery_id:3,proficiency_standard:"5x5r",each_side:false},
        {mastery_id:4,proficiency_standard:"5x5r@",each_side:true},
        {mastery_id:5,proficiency_standard:"5x10r",each_side:false},
        {mastery_id:6,proficiency_standard:"5x15r",each_side:false},
        {mastery_id:7,proficiency_standard:"5x30r",each_side:false},
        {mastery_id:8,proficiency_standard:"5x60r",each_side:false},
        {mastery_id:9,proficiency_standard:"5x10s",each_side:false},
        {mastery_id:10,proficiency_standard:"5x5rx10s",each_side:false},
        {mastery_id:11,proficiency_standard:"5x5rx10s@",each_side:true},
        {mastery_id:12,proficiency_standard:"5x15s@",each_side:true},
        {mastery_id:13,proficiency_standard:"5x30s",each_side:false},
        {mastery_id:14,proficiency_standard:"5x30s@",each_side:true},
        {mastery_id:15,proficiency_standard:"5x60s",each_side:false},
        {mastery_id:16,proficiency_standard:"5x5/2 RC",each_side:false},
        {mastery_id:17,proficiency_standard:"5x5/4 RC",each_side:false},
        {mastery_id:18,proficiency_standard:"5x10r@",each_side:true},
      ]);
    });
  };