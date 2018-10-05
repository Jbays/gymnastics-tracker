<template>
  <div class="hello">
    you're in the loginpage!
    <form id='whatever' action='/users/login' method='post'>
      <input type="email" name='email' placeholder='johndoe@email.com'>
      <br>
      <input type="password" name='password' placeholder='password'>
      <br>
      <input type="submit" id='login-id' value='Login'>
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
  mounted(){
    // let formData = document.getElementById('whatever');

    let loginSubmit = document.getElementById('login-id');
    console.log('loginSubmit>>>>>',loginSubmit)
    // let registerSubmit = document.getElementById('register-id');

    // loginSubmit.addEventListener('click',(event)=>{
    // loginSubmit.addEventListener('submit',(event)=>{
    //   console.log('you clicked me to login!');
    //   console.log('event',event);
    //   let formDataValue = document.getElementById('whatever').value;
    //   console.log('formDataValue',formDataValue);
    //   debugger;
    // })

    // registerSubmit.addEventListener('click',()=>{
    //   console.log('you clicked me to register!');
    // })

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
