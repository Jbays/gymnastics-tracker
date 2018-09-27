<template>
  <div class="hello">
    <!-- <h2>Front Lever</h2> -->
    <div v-if='fetchPreviousWorkout'>
      <h2>Your Last Workout!</h2>
      <div>Date of Last Workout: {{lastWorkoutDate}}</div>
      <div>Your Last Workout>>>{{potentialAnswer}}</div>
    </div>
    <div v-if='fetchTodaysWorkout'>
      <h3>here is today's date {{new Date().toDateString()}}</h3>
      <h1>Today's Workout!</h1>
      <div>Your Strength Exercise: {{exerciseStrength}}</div>
      <div>Strength Exercise Mastery: {{exerciseStrengthMastery}}</div>
      <div>Your Mobility Exercise: {{exerciseMobility}}</div>
      <div>Mobility Exercise Mastery: {{exerciseMobilityMastery}}</div>
    </div>
    <!--
      In the future, this will be two smiley faces.
      One happy for success.
      One sad for failure.

      No need for the form below.
    -->
    <br>
    <div>HOW DID YOU DO?</div>
    <p class='emoji-feedback true'>😀</p>
    <p class='emoji-feedback false'>😐</p>
    <p class='emoji-feedback false'>😖</p>
    <br>
    <a href='#/progressions' class="myButton">Back</a>
  </div>
</template>

<script>
import axios from 'axios';
import exercisesPL from '../../data/exercises_PL';
import masteryPL from '../../data/mastery_PL';

export default {
  name: 'FrontLever',
  data: function(){
    return{
      userId:1,
      progressionId:2,
      sequenceNumber:'',
      stepSequence:'',
      lastWorkoutDate:'',
      workoutId:'',
      potentialAnswer: '',
      exerciseStrength:'',
      exerciseStrengthMastery:'',
      exerciseMobility:'',
      exerciseMobilityMastery:'',
      fetchPreviousWorkout: false,
      fetchTodaysWorkout:false,
      updatedToday: false
    }
  },
  mounted(){
    let emojisArray = Array.from(document.getElementsByClassName('emoji-feedback'));

    emojisArray.forEach((singleEmoji)=>{
      singleEmoji.addEventListener('click',()=>{
        let bool = Boolean(singleEmoji.classList[1]);
        console.log('you clicked me!');
        
        //this can also be simplified --> changing the method depending on the 
        if ( !this.updatedToday ){
          return axios.post(`http://localhost:3000/api/v1/users_workouts/${this.userId}/${this.workoutId}`,
            {
              progressionId:this.progressionId,
              sequenceNumber:this.sequenceNumber,
              sequenceNumber:this.sequenceNumber,
              stepSequence:this.stepSequence,
              completed:bool,
              workoutNote:''
            })
            .then((response)=>{
              console.log('you send that thing!')
              console.log('this is your response>>>',response);
              this.updatedToday = true;
            })
        }
      })
    });

    //fetch previous workout
    return axios.get(`http://localhost:3000/api/v1/workouts/${this.userId}/${this.progressionId}`)
      .then((response)=>{
        console.log('this is response>>>',response);
        this.fetchPreviousWorkout = true;
        this.potentialAnswer = response.data;
        this.lastWorkoutDate = response.data.timestamp.slice(0,10);
        this.sequenceNumber = response.data.sequence_number;
        this.stepSequence = response.data.step_sequence;
        this.passedYesterday = response.data.completed;
        this.workoutId = response.data.workout_id;
        return console.log('you fetched yesterdays workout');
      })
      //then fetch today's workout!
      .then(()=>{
        //NOTE: this conditional can be simplified.
        //Instead of two different api calls, just use one
        //set the variables beforehand -- depending on the conditional logic.
        //^^simpler.

        //in progression, move up one sequence of exercises
        if ( this.passedYesterday && this.stepSequence === 9 ) {
          return axios.get(`http://localhost:3000/api/v1/workouts/today/${this.userId}/${this.progressionId}/${this.sequenceNumber+1}/1`)
            .then((response)=>{
              this.fetchTodaysWorkout = true;
              this.exerciseStrength = exercisesPL[response.data.exercise_id_strength];
              this.exerciseMobility = exercisesPL[response.data.exercise_id_mobility];
              this.exerciseStrengthMastery = masteryPL[response.data.mastery_id_strength];
              this.exerciseMobilityMastery = masteryPL[response.data.mastery_id_mobility];
            })
        } else {
          return axios.get(`http://localhost:3000/api/v1/workouts/today/${this.progressionId}/${this.sequenceNumber}/${this.stepSequence}`)
            .then((response)=>{
              console.log('this is response',response);
              this.fetchTodaysWorkout = true;
              this.exerciseStrength = exercisesPL[response.data.exercise_id_strength];
              this.exerciseMobility = exercisesPL[response.data.exercise_id_mobility];
              this.exerciseStrengthMastery = masteryPL[response.data.mastery_id_strength];
              this.exerciseMobilityMastery = masteryPL[response.data.mastery_id_mobility];
            })
        }
      })
  },
  methods: {
    handleSubmit(event) {
      // console.log('you submitted!');
      // for (let i = 0; i < event.srcElement.length-1; i++) {
      //   console.log('event.srcElement[i].value',event.srcElement[i].value);
      // }
      // console.log(this.potentialAnswer)
      // this.potentialAnswer = 'this is the response data!'
    },
  },
};

// function makeRandomString
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.emoji-feedback {
  display:inline-block;
  padding:5px;
  font-size:35px;
  margin:5px;
  cursor:pointer;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.myButton {
  background-color:#44c767;
  -moz-border-radius:28px;
  -webkit-border-radius:28px;
  border-radius:28px;
  border:1px solid #18ab29;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:25px;
  padding:16px 31px;
  text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;
}
.myButton:hover {
  background-color:#5cbf2a;
}
.myButton:active {
  position:relative;
  top:1px;
}
</style>
