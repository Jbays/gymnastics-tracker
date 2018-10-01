const _ = require('underscore');
const rawStretchData = require('./raw_stretches_data');
let exercisesInPlainLanguage = _.invert(require('./exercises_PL'));
let exerciseCounter = Object.keys(exercisesInPlainLanguage).length;

function prepForInsertionIntoExercisesTable(array,obj){
  array.forEach((element)=>{
    for ( key in element ) {
      //if the key's value is NOT blank
      //AND the first character in the keys value cannot convert to a number
      if ( key === 'front split' || key === 'middle split' || key === 'thoracic bridge' ) {
        if ( element[key].exercise_name !== '' ) {
          if ( !obj.hasOwnProperty(element[key].exercise_name)) {
            obj[element[key].exercise_name] = exerciseCounter++;
          }
        }
      }
    }
  })

  let pairs = _.pairs(_.invert(obj));

  return pairs.map((tuple)=>{
    return {
      exercise_id: tuple[0],
      exercise_name: tuple[1]
    }
  })
}

let insertIntoExercisesTable = prepForInsertionIntoExercisesTable(rawStretchData,exercisesInPlainLanguage)

module.exports = insertIntoExercisesTable;