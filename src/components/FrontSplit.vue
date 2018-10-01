<template>
  <div class="hello">
    <h2>Stretches - {{msg}}</h2>
    <div v-if='fetchTodaysWorkout'>
      <h2>This is today's workout</h2>
      <!-- <ol id='example'>
        this v-for doesn't work.
        How can I get to work??
        <li v-for='exerciseName in todaysWorkout'></li>
      </ol> -->
      <h3>{{todaysWorkout}}</h3>
      <h5 v-if='todaysWorkout[0]'>
        exercise name: {{todaysWorkout[0].exercise_name}}
        <br>
        standard: {{todaysWorkout[0].proficiency_standard}}
      </h5>
    </div>

    <h3>Today's Date: {{todaysDate}}</h3>
    <p>here is the current series of stretches!</p>
    <ol>
    </ol>
    <p>Notes I have:</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FrontSplit',
  data() {
    return {
      userId:1,
      progressionId:8,
      fetchTodaysWorkout:false,
      todaysWorkout:null,
      updatedToday:false,
      msg: 'Front Split',
      todaysDate: (new Date()).toDateString(),
    };
  },
  methods:{

  },
  mounted(){
    return axios.get(`http://localhost:3000/api/v1/stretches/${this.progressionId}`)
      .then((response)=>{
        console.log('this is response.data',response.data);
        this.todaysWorkout = response.data;
        this.fetchTodaysWorkout = true;
      })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
