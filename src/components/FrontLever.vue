<template>
  <div class="hello">
    <h2>Progressions</h2>
    <a href="#" class="myButton">front lever</a>
    <h3>here is today's date {{new Date().toDateString()}}</h3>
    <div v-bind='potentialAnswer'>update here>>>{{potentialAnswer}}</div>
    <!-- <h3 v-model='potentialAnswer'>dynamic variable>>>>>{{potentialAnswer}}</h3> -->

    <!-- To populate this data, I must add a database call -->
    <p>here is my current strength exercise:</p>
    <p>here is my current strength standard:</p>
    <br>
    <p>here is my current mobility exercise:</p>
    <p>here is my current mobility standard:</p>

    <!-- here goes form data -->
    <form @submit.prevent='handleSubmit'>
      <label class='label'>Completed strength sets:</label>
      <input type='text' class='input' name='str_sets'>
      <br>
      <label class='label'>Completed strength reps:</label>
      <input type='text' class='input' name='str_reps'>
      <br>
      <label class='label'>Completed mobility sets:</label>
      <input type='text' class='input' name='mob_sets'>
      <br>
      <label class='label'>Completed mobility reps:</label>
      <input type='text' class='input' name='mob_reps'>
      <br>
      <label class='label'>Notes:</label>
      <textarea type='message' class='input' name='mob_reps'/>
      <br>
      <button type='submit'>Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FrontLever',
  data: function(){
    return{
      name:'frontLever',
      potentialAnswer: '',
      historyRendered: false
    }
  },
  beforeMount(){
    if ( !historyRendered ){
      console.log('i was created!>>>>');

      return axios.get('http://localhost:3000/api/v1')
        .then((response)=>{
          console.log('this is response',response);
          this.potentialAnswer = response.data;
          return console.log('you did that thing!');
        })

      this.historyRendered = true;
    }
  },
  methods: {
    handleSubmit(event) {
      console.log('you submitted!');
      for (let i = 0; i < event.srcElement.length-1; i++) {
        console.log('event.srcElement[i].value',event.srcElement[i].value);
      }

      console.log(this.potentialAnswer)
      this.potentialAnswer = 'this is the response data!';

      // return axios({
      //     method:'get',
      //     url:'http://localhost:3000/api/v1',
      //   })
      return axios.get('http://localhost:3000/api/v1')
        .then((response)=>{
          console.log('this is response',response);
          this.potentialAnswer = response.data;
          return console.log('you did that thing!');
        })
    },
  },
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
