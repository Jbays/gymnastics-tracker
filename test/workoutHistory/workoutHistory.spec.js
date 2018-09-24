const allPreviousWorkoutHistory = require('../../data/processed_workout_history');

//from input string, slices the first 10 characters
function snipYearMonthDay(string){
  return string.slice(0,10);
}

describe('all my previous workout history', () => {
  describe('my first workout',()=>{
    let firstWorkout = allPreviousWorkoutHistory[0];
    it('my first workout was on 19 february 2018. front lever progression. 1st step. PASSED.', () => {
      expect(snipYearMonthDay(allPreviousWorkoutHistory[0].timestamp)).toEqual('2018-02-19');
      expect(firstWorkout.progression_name).toEqual('front lever');
      expect(firstWorkout.step_sequence).toEqual(1);
      expect(firstWorkout.completed).toEqual(true);
    });
    it('strength exercise was bent hollow body hold.  3 sets.  12 seconds.',()=>{
      expect(firstWorkout.exercise_id_strength).toEqual('bent hollow body hold');
      expect(firstWorkout.mastery_id_strength).toEqual({sets:3,reps:null,secs:12});
    })
    it('mobility exercise was cat cow.  5 sets.  3 reps.',()=>{
      expect(firstWorkout.exercise_id_mobility).toEqual('cat cow');
      expect(firstWorkout.mastery_id_mobility).toEqual({sets:5,reps:3,secs:null});
    })
  })
  describe('my second workout',()=>{
    let secondWorkout = allPreviousWorkoutHistory[1];
    it('my second workout was on 19 february 2018. side lever progression.  1st step.  PASSED.' ,()=>{
      expect(snipYearMonthDay(secondWorkout.timestamp)).toEqual('2018-02-19');
      expect(secondWorkout.progression_name).toEqual('side lever');
      expect(secondWorkout.step_sequence).toEqual(1);
      expect(secondWorkout.completed).toEqual(true);
    })
    it('strength exercise was seated russian twist.  3 sets.  6 reps.',()=>{
      expect(secondWorkout.exercise_id_strength).toEqual('seated russian twist');
      expect(secondWorkout.mastery_id_strength).toEqual({sets:3,reps:6,secs:null});
    })
    it('mobility exercise was standing hip circle',()=>{
      expect(secondWorkout.exercise_id_mobility).toEqual('standing hip circle');
      expect(secondWorkout.mastery_id_mobility).toEqual({sets:3,reps:10,secs:null});
    })
  })
  describe('my third workout',()=>{
    let thirdWorkout = allPreviousWorkoutHistory[2];
    it('my third workout was on 19 february 2018.  manna progression.  1st step.  FAILED.',()=>{
      expect(snipYearMonthDay(thirdWorkout.timestamp)).toEqual('2018-02-19');
      expect(thirdWorkout.progression_name).toEqual('manna');
      expect(thirdWorkout.step_sequence).toEqual(1);
      expect(thirdWorkout.completed).toEqual(false);
    })
    it('strength exercise was tuck-up.  3 sets.  3 reps.',()=>{
      expect(thirdWorkout.exercise_id_strength).toEqual('tuck-up');
      expect(thirdWorkout.mastery_id_strength).toEqual({sets:3,reps:3,secs:null});
    })
    it('mobility exercise was stiff leg windmill',()=>{
      expect(thirdWorkout.exercise_id_mobility).toEqual('stiff leg windmill');
      expect(thirdWorkout.mastery_id_mobility).toEqual({sets:5,reps:3,secs:null});
    })
  })
});