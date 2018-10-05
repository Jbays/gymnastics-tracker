const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || '3000';
const config = require('../knexfile')['development'];
const knex = require('knex')(config);
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.listen(PORT,()=>{
  console.log(`Server is listening on PORT ${PORT}`);
});

app.post('/users/login',(req,res)=>{
  console.log('youre trying to login');
  console.log('this is the whole request',JSON.stringify(req.body));

  //search for user credentials in database.
  return knex('users')
    .select()
    .where('email','=',req.body.email)
    .andWhere('password','=',req.body.password)
    .then((response)=>{
      console.log('response>>>>',response);
      if ( response.length === 1 ) {
        console.log('yay, users in your database!');
        res.redirect('http://localhost:8080/#/')
      } else {
        res.redirect('http://localhost:8080/#/login')
      }
    })
})

app.post('/users/register',(req,res)=>{
  console.log('youre trying to register!')
  console.log('this is req.body',req.body)

  return knex('users')
    .select()
    .where('email','=',req.body.email)
    .then((response)=>{
      //email was found in database
      if ( response.length === 1 ) {
        res.redirect('http://localhost:8080/#/login')
      }
      if ( response.length === 0 ) {
        return knex('users')
          .max('user_id')
          .then((response)=>{
            let nextUserId = response[0].max+1;
      
            return knex('users')
              .insert({
                user_id:nextUserId,
                email:req.body.email,
                password:req.body.password
              })
          })
          .then((response)=>{
            res.redirect('http://localhost:8080/#/')
          })
          .catch((err)=>{
            console.log('sorry bro, this is your error while creating new user',err)
          })

      }
    })

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
    } else {
      console.log('couldnt find the requested step')
      console.log('therefore, fetch the last step!');
      console.log('req.params',req.params);
      req.params.step_sequence = 9;

      /*
        29 Sept 2018
          this is hacky -- but gets the job done.
          if this get request cant find a specific step,
          then automatically look for the ninth step in the sequence.

          All ninth steps are defined.  That's why this solution works.

          IN THE FUTURE:
          I should add foundations key to the database schema.
          Then the logic can go: 
            if foundation === 1, search for the step (and hopefully find it)
            if step not found, search for step+1 (until a step is found)
            if foundation > 1, search for step 9 (the mastery standard)
            and render a view which'll allow users to log their individual sets / reps.
      */
      return knex('progressions_exercises_mastery')
        .join('mastery','progressions_exercises_mastery.mastery_id_strength','=','mastery.mastery_id')
        .where('progression_id','=',req.params.progression_id)
        .andWhere('sequence_number','=',req.params.sequence_number)
        .join('steps','mastery.mastery_id','=','steps.mastery_id')
        .where('steps.step_sequence','=',req.params.step_sequence)    
        .select()
        .then((response)=>{
          if ( response.length === 1 ) {
            console.log('whatever is this thing?',response);
            res.send(response.pop());
          }
        })
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

app.get('/api/v1/stretches/:progression_id',(req,res)=>{
  console.log('hello sailor from stretches route!');

  return knex('stretches_progressions_mastery')
    .join('exercises','stretches_progressions_mastery.exercise_id','=','exercises.exercise_id')
    .join('mastery','stretches_progressions_mastery.mastery_id','=','mastery.mastery_id')
    .select('exercise_name','proficiency_standard')
    .where('progression_id','=',req.params.progression_id)
    .then((response)=>{
      res.send(response)
    })
})

app.get('/api/v1/stretches/:user_id/:progression_id',(req,res)=>{
  console.log('you hit me for your stretches!')
  let nextRoutineId = null;

  //find the highest routine_id
  return knex('routines')
    .join('users_routines','routines.routine_id','=','users_routines.routine_id')
    .max('routines.routine_id')
    .then((response)=>{
      nextRoutineId = response[0].max+1;
      //fetch the last stretch routine in this progression
      return knex('users_routines')
        .where('progression_id','=',req.params.progression_id)
        .andWhere('user_id','=',req.params.user_id)
        .orderBy('timestamp','desc')
        .first()
    })
    .then((lastStretchRoutine)=>{
      //join the last users_routines with tables to get everything in plain language
      return knex('routines')
        .where('routine_id','=',lastStretchRoutine.routine_id)
        .andWhere('progression_id','=',lastStretchRoutine.progression_id)
        .join('stretches_progressions_mastery','stretches_progressions_mastery.stretch_sequence','=','routines.stretch_sequence')
        .join('exercises','exercises.exercise_id','=','stretches_progressions_mastery.exercise_id')
        .join('mastery','mastery.mastery_id','=','stretches_progressions_mastery.mastery_id')
        .select(
          'exercise_name',
          'proficiency_standard',
          'routines.stretch_sequence',
          'completed'
        )
        .orderBy('stretch_sequence','asc')
        .then((response)=>{
          let bundle = {
            nextRoutineId,
            lastWorkoutTimestamp:lastStretchRoutine.timestamp,
            routineNote:lastStretchRoutine.routine_note,
            lastStretchRoutine:response
          }
          return res.send(bundle);
        })
    })
})

app.post('/api/v1/stretches/:user_id/:progression_id',(req,res)=>{
  console.log('you tried posting a stretch routine!');
  
  //this should be wrapped in a transaction
  //<----- start
  return knex('users_routines')
    .insert({
      user_id:req.params.user_id,
      routine_id:req.body.routineId,
      timestamp:new Date(),
      progression_id:req.params.progression_id,
      routine_note:req.body.stretchNote
    })
    .select()
    .then((response)=>{
      let insertRoutineData = [];
      
      console.log('this is req.body',req.body);
      console.log('this is req.params',req.params);
      
      for ( stretch in req.body.stretchResults ) {
        // console.log('stretch',stretch)
        // console.log('req.body.stretchResults[stretch]',req.body.stretchResults[stretch]);
        let routineObj = {};
        routineObj.routine_id = req.body.routineId;
        routineObj.stretch_sequence = stretch;
        routineObj.completed = req.body.stretchResults[stretch];
        routineObj.stretch_sequence++;
        insertRoutineData.push(routineObj);
      }

      return knex('routines')
        .insert(insertRoutineData)
    })
  //----> end
})