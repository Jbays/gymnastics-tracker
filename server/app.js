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
  // console.log('fetching yesterdays workout');
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

//get today's workout
app.get('/api/v1/workouts/today/:progression_id/:sequence_number/:step_sequence',(req,res)=>{
  console.log('you want todays workout too');
  console.log('req.params',req.params);

  return knex('progressions_exercises_mastery')
    .join('mastery','progressions_exercises_mastery.mastery_id_strength','=','mastery.mastery_id')
    .where('progression_id','=',req.params.progression_id)
    .andWhere('sequence_number','=',req.params.sequence_number)
    .join('steps','mastery.mastery_id','=','steps.mastery_id')
    .where('steps.step_sequence','=',req.params.step_sequence)    
    .select()
    .then((response)=>{
      console.log('response about todays workout',response)
      if ( response.length === 1 ) {
        res.send(response.pop());
      }
    })
  
})

//post todays workout
app.post('/api/v1/users_workouts/:user_id/:workout_id/',(req,res)=>{
  console.log('hello sailor from users_workouts')
  
  //this is not the right way! -- but should work
  return knex('users_workouts') 
    .pluck('workout_id').orderBy('workout_id','desc').first()
    .then((response)=>{
      let newWorkoutId = response.workout_id+1;
      
      //this should be wrapped in a transaction
      //<------start
      return knex('users_workouts').insert({
        user_id:req.params.user_id,
        workout_id:newWorkoutId
      }).then(()=>{
        let date = new Date();
        return knex('workouts').insert({
          workout_id:Number(newWorkoutId),
          timestamp:date,
          progression_id:req.body.progressionId,
          sequence_number:req.body.sequenceNumber,
          step_sequence:req.body.stepSequence,
          completed:req.body.completed,
          workout_note:req.body.workoutNote
        })
        .then(()=>{
          res.send("we've successfully inserted a new element");
        })
        .catch((err)=>{
          console.error('this error is from inserting new workout',err);
        })
      })
      //stop------>
    })
})
