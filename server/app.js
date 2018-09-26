const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || '3000';
const config = require('../knexfile')['development'];
const knex = require('knex')(config);

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.listen(PORT,()=>{
  console.log(`Server is listening on PORT ${PORT}`);
})

//this fetches the last workout of progression_id = req.params.progression_id
//AND user_id = req.params.user_id
app.get('/api/v1/workouts/:user_id/:progression_id',(req,res)=>{
  return knex('users')
    .join('users_workouts','users.user_id','=','users_workouts.user_id')
    .join('workouts','users_workouts.workout_id','=','workouts.workout_id')
    .where('workouts.progression_id','=',req.params.progression_id)
    .andWhere('users_workouts.user_id','=',req.params.user_id)
    .orderBy('timestamp','last')
    .select()
    .then((response)=>{
      res.send(response.pop())
    })
})

app.post('/api/v1/workouts/:user_id/:progression_id',(req,res)=>{
  //post to the user_workouts
  //then post to the workouts
})

//