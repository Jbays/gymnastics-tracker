# gymnastics-tracker

Gymnastics Tracker helps users record their progress along 7 gymnastics progressions and 3 stretching routines.

## Setup
To start backend:
`nodemon server/app.js`

To start frontend:
`npm run dev`

Front end should render @ `http://localhost:8080/#/`.

To run seed and migrations:
`knex migrate:rollback && knex migrate:latest && knex seed:run`

Seed data are from my own gymnastics workouts.

## Gymnastics Tracker Use Cases

### First Use Case - Gymnastics Progressions
For a given gymnastics progression, a user wants to (1) know what is their exact workout, and (2) record the results of their prescribed workout.
![GT Progression Flow](https://github.com/Jbays/gymnastics-tracker/blob/master/src/assets/progression-example.png "How To Use GT for Progressions")

### Second Use Case - Stretching Routines
For a given stretch routine, a user wants to (1) see info from last routine, (2) view all stretches, and (3) record results for each stretch.
![GT Stretch Routine Flow](https://github.com/Jbays/gymnastics-tracker/blob/master/src/assets/stretch-routine-example.png "How To Use GT for Stretch Routines")


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```