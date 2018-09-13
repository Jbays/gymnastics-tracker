<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Progressions</h2>
    <a href="#" class="myButton">manna</a>
    <h3>Today's Date: {{todaysDate}}</h3>
    <p>here is my current strength exercise:</p>
    <p>here is my current mobility exercise:</p>
    <p>I completed this many strength sets/reps:</p>
    <p>I completed this many mobility sets/reps:</p>
    <p>Notes I have:</p>
  </div>
</template>

<script>
export default {
  name: 'Manna',
  data() {
    return {
      msg: 'Manna!',
      todaysDate: (new Date()).toDateString(),
    };
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
