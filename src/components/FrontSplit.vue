<template>
  <div class="hello">
    <h2>Stretches - {{msg}}</h2>
    <h3>Today's Date: {{todaysDate}}</h3>
    <div v-if='!submittedStretchRoutine'>
      <div>heres your last stretch routine!</div>
      <div v-if='yourLastStretchRoutine'>
        <div>date of your last workout --> {{yourLastStretchDate}}</div>
        <div >{{yourLastStretchRoutine}}</div>
        <div >your last note: {{lastRoutineNote}}</div>
      </div>
      <br>
      <div>This is today's workout:</div>
      <div v-if='fetchTodaysWorkout' >
        <div class='display-exercise' id='sequence1'>
          exercise name: {{todaysWorkout[0].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[0].standard}}
          <br>
        </div>
        <div class='display-exercise' id='sequence2'>
          exercise name: {{todaysWorkout[1].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[1].standard}}
        </div>
        <div class='display-exercise' id='sequence3'>
          exercise name: {{todaysWorkout[2].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[2].standard}}
        </div>
        <div class='display-exercise' id='sequence4'>
          exercise name: {{todaysWorkout[3].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[3].standard}}
        </div>
        <div class='display-exercise' id='sequence5'>
          exercise name: {{todaysWorkout[4].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[4].standard}}
        </div>
        <div class='display-exercise' id='sequence6'>
          exercise name: {{todaysWorkout[5].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[5].standard}}
        </div>
        <div class='display-exercise' id='sequence7'>
          exercise name: {{todaysWorkout[6].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[6].standard}}
        </div>
        <div class='display-exercise' id='sequence8'>
          exercise name: {{todaysWorkout[7].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[7].standard}}
        </div>
        <div class='display-exercise' id='sequence9'>
          exercise name: {{todaysWorkout[8].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[8].standard}}
        </div>
        <div class='display-exercise' id='sequence10'>
          exercise name: {{todaysWorkout[9].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[9].standard}}
        </div>
        <div class='display-exercise' id='sequence11'>
          exercise name: {{todaysWorkout[10].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[10].standard}}
        </div>
        <div class='display-exercise' id='sequence12'>
          exercise name: {{todaysWorkout[11].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[11].standard}}
        </div>
        <div class='display-exercise' id='sequence13'>
          exercise name: {{todaysWorkout[12].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[12].standard}}
        </div>
        <div class='display-exercise' id='sequence14'>
          exercise name: {{todaysWorkout[13].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[13].standard}}
        </div>
        <div class='display-exercise' id='sequence15'>
          exercise name: {{todaysWorkout[14].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[14].standard}}
        </div>
        <div class='display-exercise' id='sequence16'>
          exercise name: {{todaysWorkout[15].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[15].standard}}
        </div>
        <div class='display-exercise' id='sequence17'>
          exercise name: {{todaysWorkout[16].exercise_name}}
          <label class='emoji-feedback true'>😀</label><label class='emoji-feedback false'>😐</label>
          <br>
          standard: {{todaysWorkout[16].standard}}
        </div>
      </div>
      <label>Notes I have:</label>
      <input type="text" id='stretchRoutineNotes'>
      <br>
      <br>
      <a class="myButton" id='submitButton'>submit</a>
    </div>
    <div v-else>
      You successfully submitted results for your stretch routine!
      <br>
      See you tomorrow!
      <div>
        Need to revise todays workout?
      </div>
    </div>
    <a href='#/stretches' class="myButton">Back</a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FrontSplit',
  data() {
    return {
      fetchTodaysWorkout:false,
      lastRoutineNote:'',
      msg: 'Front Split',
      progressionId:8,
      stretchResults:{
        0:null,
        1:null,
        2:null,
        3:null,
        4:null,
        5:null,
        6:null,
        7:null,
        8:null,
        9:null,
        10:null,
        11:null,
        12:null,
        13:null,
        14:null,
        15:null,
        16:null,
      },
      submittedStretchRoutine: false,
      todaysDate: (new Date()).toDateString(),
      todaysRoutineId:null,
      todaysWorkout:null,
      updatedToday:false,
      userId:null,
      yourLastStretchDate:null,
      yourLastStretchRoutine:null,
    };
  },
  methods:{

  },
  mounted(){
    function assignUserId(cookie){
      return cookie.split('userId=')[1];
    }

    this.userId = assignUserId(document.cookie);
    //fetches the last stretch routine of this progression_id
    return axios.get(`http://localhost:3000/api/v1/stretches/${this.userId}/${this.progressionId}`)
      .then((response)=>{
        this.todaysRoutineId = response.data.nextRoutineId;
        this.yourLastStretchDate = response.data.lastWorkoutTimestamp.slice(0,10);
        this.yourLastStretchRoutine = JSON.parse(JSON.stringify(response.data.lastStretchRoutine));
        this.lastRoutineNote = JSON.stringify(response.data.routineNote);
        return response.data.lastStretchRoutine;
      })
      .then((previousStretchRoutine)=>{
        this.todaysWorkout = previousStretchRoutine.map((stretchExercise)=>{
          stretchExercise.completed = false;
          stretchExercise.standard = stretchExercise.proficiency_standard.split('x')[1];
          return stretchExercise;
        });
        this.fetchTodaysWorkout = true;
      })
      .then(()=>{
        let allEmojiArray = Array.from(document.getElementsByClassName('emoji-feedback'));

        allEmojiArray.forEach((singleEmoji,index)=>{
          let bool = singleEmoji.classList[1];
          singleEmoji.addEventListener('click',()=>{
            let shift = (index % 2 === 0) ? 0 : 1;
            let integerize = Math.round(index/2)-shift;
            this.stretchResults[integerize] = bool;
          });
        });

        let submitButton = document.getElementById('submitButton');

        submitButton.addEventListener('click',()=>{
          console.log('you click submit button!')
          let payload = {};
          payload.stretchNote = document.getElementById('stretchRoutineNotes').value;
          payload.routineId = this.todaysRoutineId;
          payload.stretchResults = this.stretchResults;
          this.submittedStretchRoutine = true;

          return axios.post(`http://localhost:3000/api/v1/stretches/${this.userId}/${this.progressionId}`,payload)
        })
        console.log('yay at the end!@')
      });
  }
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
