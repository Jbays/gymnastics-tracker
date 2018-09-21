exports.seed = function(knex, Promise) {
  return knex('workouts').del()
    .then(function () {
      return knex('workouts').insert([
        // {id: 1, colName: 'rowValue1'},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};

//TEMPLATE
// {
//   workout_id:1,
//   timestamp:'19 Feb 2018',
//   progression_id:2,
//   sequence_number:,
//   step_id:,
//   completed:,
//   workout_note:,
// }


//this selects the front lever progression, first exercise pair
//select * from progressions_exercises_mastery
// where progression_id = 2 AND
// sequence_number = 1;

//how do I connect step_id?

// Bent Hollow Body Hold 3x12sCat-Cow 3x5r
// FL
// PE1
// STEP1
// Easy
// Seated Russian Twist 3x6rStanding Hip Circle 3x10r
// SL
// PE1
// STEP1
// Easy
// Tuck-Up 3x3rStiff Leg Windmill 3x5r
// MN
// PE1
// STEP1
// Fine