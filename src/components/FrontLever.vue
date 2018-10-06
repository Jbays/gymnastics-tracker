<template>
  <div v-if='!userSubmitted'>
    <!-- <h2>Front Lever</h2> -->
    <div v-if='fetchPreviousWorkout'>
      <h2>Your Last Workout!</h2>
      <div>Date of Last Workout: {{previous.workoutDate}}</div>
      <div>Your Last Workout>>>{{previousWorkout}}</div>
    </div>
    <div v-if='fetchTodaysWorkout'>
      <h3>here is today's date {{new Date().toDateString()}}</h3>
      <h1>Today's Workout!</h1>
      <div>Your Strength Exercise: {{today.exerciseStrength}}</div>
      <div>Strength Exercise Mastery: {{today.exerciseStrengthMastery}}</div>
      <div>Your Mobility Exercise: {{today.exerciseMobility}}</div>
      <div>Mobility Exercise Mastery: {{today.exerciseMobilityMastery}}</div>
      <div>Your Step {{today.stepSequence}}</div>
    </div>
    <br>
    <div>HOW DID YOU DO?</div>
    <p class='emoji-feedback true'>😀</p>
    <p class='emoji-feedback false'>😐</p>
    <p class='emoji-feedback false'>😖</p>
    <br>
    <input type="text" id='workoutNotesField'>
    <br>
    <br>
    <a href='#/progressions' class="myButton">Back</a>
  </div>
  <div v-else>
    You successfully submitted your workout!
    <br>
    See you tomorrow!

    <div>
      Need to revise todays workout?
    </div>

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
      userId:null,
      progressionId:2,
      fetchPreviousWorkout: false,
      fetchTodaysWorkout:false,
      updatedToday: false,
      previous:{
        workoutDate:null,
        stepSequence:null,
        sequenceNumber:null,
        workoutId:null,
      },
      today:{
        exerciseStrength:null,
        exerciseStrengthMastery:null,
        exerciseMobility:null,
        exerciseMobilityMastery:null,
        sequenceNumber:null,
        stepSequence:null,
        workoutNote:null
      },
      previousWorkout: '',
      userSubmitted:false
    }
  },
  mounted(){
    function assignUserId(cookie){
      return cookie.split('userId=')[1];
    }

    this.userId = assignUserId(document.cookie);

    //fetch previous workout
    return axios.get(`http://localhost:3000/api/v1/workouts/${this.userId}/${this.progressionId}`)
      .then((response)=>{
        console.log('fetched previous workout!');
        console.log('this is response>>>',response);
        this.fetchPreviousWorkout = true;
        this.previousWorkout = response.data;
        this.previous.workoutDate = response.data.timestamp.slice(0,10);
        this.previous.sequenceNumber = response.data.sequence_number;
        this.previous.stepSequence = response.data.step_sequence;
        this.passedYesterday = response.data.completed;
        this.workoutId = response.data.workout_id;
        return
      })
      //then fetch today's workout!
      .then(()=>{
        this.today.stepSequence = this.previous.stepSequence;
        this.today.sequenceNumber = this.previous.sequenceNumber;
        console.log('just finished fetching yesterdays working!');
        console.log('now fetch todays workout!');
        console.log('this.passedYesterday>>>>',this.passedYesterday);
        console.log('this.previous.stepSequence>>>>',this.previous.stepSequence);

        //this handles when user completed the 9th step!
        if ( this.passedYesterday &&  this.previous.stepSequence === 9 ) {
          this.today.stepSequence = 1;
          //eventually this will break --> when I'm done with all the exercise pairs
          this.today.sequenceNumber = this.previous.sequenceNumber+1;
        } else if ( this.passedYesterday ) {
          this.today.stepSequence++;
        }

        console.log('after assignment');
        console.log('this.passedYesterday>>>>',this.passedYesterday);
        console.log('this.today.sequenceNumber>>>>',this.today.sequenceNumber);
        console.log('this.today.stepSequence>>>>',this.today.stepSequence);

        let address = `http://localhost:3000/api/v1/workouts/today/${this.progressionId}/${this.today.sequenceNumber}/${this.today.stepSequence}`;

        return axios.get(address)
          .then((response)=>{
            this.fetchTodaysWorkout = true;
            this.today.exerciseStrength = exercisesPL[response.data.exercise_id_strength];
            this.today.exerciseMobility = exercisesPL[response.data.exercise_id_mobility];
            this.today.exerciseStrengthMastery = masteryPL[response.data.mastery_id_strength];
            this.today.exerciseMobilityMastery = masteryPL[response.data.mastery_id_mobility];
            
            console.log('this worked?')
          })
      })
      .then(()=>{
        let emojisArray = Array.from(document.getElementsByClassName('emoji-feedback'));
        let workoutNoteField = document.getElementById('workoutNotesField')

        emojisArray.forEach((singleEmoji)=>{
          singleEmoji.addEventListener('click',()=>{
            let bool = Boolean(singleEmoji.classList[1]);
            console.log('you clicked me!');
            
            //this can also be simplified --> changing the method depending on the 
            if ( !this.updatedToday ){
              console.log('this should trigger only once!');
              return axios.post(`http://localhost:3000/api/v1/users_workouts/${this.userId}/${this.workoutId}`,
                {
                  progressionId:this.progressionId,
                  sequenceNumber:this.today.sequenceNumber,
                  stepSequence:this.today.stepSequence,
                  completed:bool,
                  workoutNote:workoutNoteField.value
                })
                .then((response)=>{
                  console.log('you send that thing!')
                  console.log('this is your response>>>',response);
                  this.updatedToday = true;
                  this.userSubmitted = true;
                  this.stepSequence = response.data.stepSequence
                })
            }
          })
        });
      })
  },
  methods: {},
};

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
