<template>
  <div class="hello">
    you're in user registration!
    <form action='http://localhost:3000/users/register' method='post'>
      <input type="email" name='email' placeholder='johndoe@email.com'>
      <br>
      <input type="password" name='password' placeholder='password'>
      <br>
      <input type="submit" value='Register'>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Loginpage',
  data() {
    return {
      msg: 'Track Your Gymnastics',
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
