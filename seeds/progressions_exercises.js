exports.seed = (knex, Promise) =>{
  return knex('progressions_exercises').del()
    .then( () =>{
      return knex('progressions_exercises').insert([
        {progression_id:1,exercise_id_strength:1,exercise_id_mobility:2,sequence_number:1},
        {progression_id:1,exercise_id_strength:3,exercise_id_mobility:4,sequence_number:2},
        {progression_id:1,exercise_id_strength:5,exercise_id_mobility:6,sequence_number:3},
        {progression_id:1,exercise_id_strength:7,exercise_id_mobility:8,sequence_number:4},
        {progression_id:1,exercise_id_strength:9,exercise_id_mobility:10,sequence_number:5},
        {progression_id:1,exercise_id_strength:11,exercise_id_mobility:12,sequence_number:6},
        {progression_id:1,exercise_id_strength:13,exercise_id_mobility:14,sequence_number:7},
        {progression_id:1,exercise_id_strength:15,exercise_id_mobility:16,sequence_number:8},
        {progression_id:1,exercise_id_strength:17,exercise_id_mobility:18,sequence_number:9},
        {progression_id:1,exercise_id_strength:19,exercise_id_mobility:20,sequence_number:10},
        {progression_id:1,exercise_id_strength:21,exercise_id_mobility:22,sequence_number:11},
        {progression_id:1,exercise_id_strength:23,exercise_id_mobility:24,sequence_number:12},
        {progression_id:1,exercise_id_strength:25,exercise_id_mobility:26,sequence_number:13},
        {progression_id:1,exercise_id_strength:27,exercise_id_mobility:28,sequence_number:14},
        {progression_id:1,exercise_id_strength:29,exercise_id_mobility:30,sequence_number:15},
        {progression_id:1,exercise_id_strength:31,exercise_id_mobility:32,sequence_number:16},
        {progression_id:1,exercise_id_strength:33,exercise_id_mobility:34,sequence_number:17},
      ]);
    });
  };