const progression_exercise_name_mastery_id_ARRAY = require('../data/raw_exercises_mastery');

exports.seed = (knex, Promise) =>{
  return knex('progressions_exercises_mastery').del()
  .then( () =>{
    //NOTE: shifts are the number of exercise pairs per progression
    const shifts = [17,27,25,18,30,25,27];
    const cutsIndexes = [0,34,88,138,174,234,284];
    return knex('exercises')
    .select()
    .then((allExercises)=>{
      let allProgressions = [];
      shifts.forEach((val,index)=>{
        let count = 1;
        for ( let i = cutsIndexes[index]; i < val+cutsIndexes[index]; i++ ) {
          let obj = {
            progression_id:index+1,
            exercise_id_strength:null,
            mastery_id_strength:null,
            exercise_id_mobility:null,
            mastery_id_mobility:null,
            sequence_number:null
          };
          obj.exercise_id_strength = allExercises[i].exercise_id;
          obj.mastery_id_strength = progression_exercise_name_mastery_id_ARRAY[obj.progression_id][allExercises[i].exercise_name];
          obj.exercise_id_mobility = allExercises[i].exercise_id+shifts[index];
          obj.mastery_id_mobility = progression_exercise_name_mastery_id_ARRAY[obj.progression_id][allExercises[i+shifts[index]].exercise_name];
          obj.sequence_number = count;
          count++;
          allProgressions.push(obj);
        }
      })
      return allProgressions
    })
    .then((allProgressionsInSequence)=>{
      return knex('progressions_exercises_mastery')
        .insert(allProgressionsInSequence)
        .catch((err)=>{
          console.error('Seed error with progressions_exercises_mastery',err);
        })
    })
  });
};