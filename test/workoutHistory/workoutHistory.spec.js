const allPreviousWorkoutHistory = require('../../data/processed_workout_history');

//from input string, slices the first 10 characters
function snipYearMonthDay(string){
  return string.slice(0,10);
}

describe('all my previous workout history', () => {
  describe('#1 workout',()=>{
    let firstWorkout = allPreviousWorkoutHistory[0];
    it('On 19 february 2018. front lever progression. 1st step. PASSED.', () => {
      expect(snipYearMonthDay(allPreviousWorkoutHistory[0].timestamp)).toEqual('2018-02-19');
      expect(firstWorkout.progression_name).toEqual('front lever');
      expect(firstWorkout.step_number).toEqual(1);
      expect(firstWorkout.completed).toEqual(true);
    });
    it('strength exercise was bent hollow body hold.  3 sets.  12 seconds.',()=>{
      expect(firstWorkout.strength_exercise).toEqual('bent hollow body hold');
      expect(firstWorkout.strength_sets).toEqual({sets:3,reps:null,secs:12});
    })
    it('mobility exercise was cat cow.  3 sets.  5 reps.',()=>{
      expect(firstWorkout.mobility_exercise).toEqual('cat cow');
      expect(firstWorkout.mobility_sets).toEqual({sets:3,reps:5,secs:null});
    })
  })
  describe('#2 workout',()=>{
    let secondWorkout = allPreviousWorkoutHistory[1];
    it('On 19 february 2018. side lever progression.  1st step.  PASSED.' ,()=>{
      expect(snipYearMonthDay(secondWorkout.timestamp)).toEqual('2018-02-19');
      expect(secondWorkout.progression_name).toEqual('side lever');
      expect(secondWorkout.step_number).toEqual(1);
      expect(secondWorkout.completed).toEqual(true);
    })
    it('strength exercise was seated russian twist.  3 sets.  6 reps.',()=>{
      expect(secondWorkout.strength_exercise).toEqual('seated russian twist');
      expect(secondWorkout.strength_sets).toEqual({sets:3,reps:6,secs:null});
    })
    it('mobility exercise was standing hip circle',()=>{
      expect(secondWorkout.mobility_exercise).toEqual('standing hip circle');
      expect(secondWorkout.mobility_sets).toEqual({sets:3,reps:10,secs:null});
    })
  })
  describe('#3 workout',()=>{
    let thirdWorkout = allPreviousWorkoutHistory[2];
    it('On 19 february 2018.  manna progression.  1st step.  FAILED.',()=>{
      expect(snipYearMonthDay(thirdWorkout.timestamp)).toEqual('2018-02-19');
      expect(thirdWorkout.progression_name).toEqual('manna');
      expect(thirdWorkout.step_number).toEqual(1);
      expect(thirdWorkout.completed).toEqual(false);
    })
    it('strength exercise was tuck-up.  3 sets.  3 reps.',()=>{
      expect(thirdWorkout.strength_exercise).toEqual('tuck-up');
      expect(thirdWorkout.strength_sets).toEqual({sets:3,reps:3,secs:null});
    })
    it('mobility exercise was stiff leg windmill. 3 sets.  5 reps',()=>{
      expect(thirdWorkout.mobility_exercise).toEqual('stiff leg windmill');
      expect(thirdWorkout.mobility_sets).toEqual({sets:3,reps:5,secs:null});
    })
  })
  describe('#4 workout',()=>{
    let fourthWorkout = allPreviousWorkoutHistory[3];
    it('21 february 2018.  single leg squat progression.  9 step.  pass',()=>{
      expect(snipYearMonthDay(fourthWorkout.timestamp)).toEqual('2018-02-21');
      expect(fourthWorkout.progression_name).toEqual('single leg squat');
      expect(fourthWorkout.step_number).toEqual(9);
      expect(fourthWorkout.completed).toEqual(true);
    })
    it('strength exercise was',()=>{
      expect(fourthWorkout.strength_exercise).toEqual('assisted squat');
      expect(fourthWorkout.strength_sets).toEqual({sets:5,reps:15,secs:null});
    })
    it('mobility exercise was',()=>{
      expect(fourthWorkout.mobility_exercise).toEqual('sideprone lift');
      expect(fourthWorkout.mobility_sets).toEqual({sets:5,reps:3,secs:null});
    })
  })
  describe('#5 workout',()=>{
    let fifthWorkout = allPreviousWorkoutHistory[4];
    it('22 february 2018.  hollow back press progression.  1 step. pass',()=>{
      expect(snipYearMonthDay(fifthWorkout.timestamp)).toEqual('2018-02-22');
      expect(fifthWorkout.progression_name).toEqual('hollow back press');
      expect(fifthWorkout.step_number).toEqual(1);
      expect(fifthWorkout.completed).toEqual(true);
    })
    it('strength exercise was',()=>{
      expect(fifthWorkout.strength_exercise).toEqual('incline push up');
      expect(fifthWorkout.strength_sets).toEqual({sets:3,reps:3,secs:null});
    })
    it('mobility exercise was',()=>{
      expect(fifthWorkout.mobility_exercise).toEqual('german arm swing');
      expect(fifthWorkout.mobility_sets).toEqual({sets:3,reps:10,secs:null});
    })
  })
  describe('#6 workout',()=>{
    let sixthWorkout = allPreviousWorkoutHistory[5];
    it('22 february 2018.  straddle planche.  1 step.  pass.',()=>{
      expect(snipYearMonthDay(sixthWorkout.timestamp)).toEqual('2018-02-22');
      expect(sixthWorkout.progression_name).toEqual('straddle planche');
      expect(sixthWorkout.step_number).toEqual(1);
      expect(sixthWorkout.completed).toEqual(true);
    })
    it('strength exercise was',()=>{
      expect(sixthWorkout.strength_exercise).toEqual('scapular shrugs');
      expect(sixthWorkout.strength_sets).toEqual({sets:3,reps:3,secs:null})
    })
    it('mobility exercise was',()=>{
      expect(sixthWorkout.mobility_exercise).toEqual('swivel hips');
      //this is coming in as 5 sets of 3 reps!
      expect(sixthWorkout.mobility_sets).toEqual({sets:3,reps:5,secs:null})
    })
  })
  describe('#7 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#8 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#9 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#10 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#11 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#12 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#13 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#13 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#14 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#15 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#16 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#17 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#18 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#19 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
  describe('#20 workout',()=>{
    it('date.  progression.  step.  pass or fail',()=>{

    })
    it('strength exercise was',()=>{

    })
    it('mobility exercise was',()=>{
      
    })
  })
});