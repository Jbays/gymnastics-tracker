exports.seed = (knex, Promise) =>{
  return knex('progressions_exercises').del()
    .then( () =>{
      //NOTE: shifts are the number of each strength/mobility exercise per progression
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
              exercise_id_mobility:null,
              sequence_number:null
            };
            obj.exercise_id_strength = allExercises[i].exercise_id;
            obj.exercise_id_mobility = allExercises[i].exercise_id+shifts[index];
            obj.sequence_number = count;
            count++;
            allProgressions.push(obj);
          }
        })
        return allProgressions
      })
      .then((allProgressionsInSequence)=>{
        return knex('progressions_exercises')
          .insert(allProgressionsInSequence)
          .catch((err)=>{
            console.error('Seed error with progressions_exercises',err);
          })
      })
    });
  };