# gymnastics-tracker

Gymnastics Tracker helps users record their progress along 10 gymnastics progressions.

To start backend:
`nodemon server/app.js`

To start frontend:
`npm run dev`

Front end should render @ `http://localhost:8080/#/`.

To run seed and migrations:
`knex migrate:rollback && knex migrate:latest && knex seed:run`

Seed data are from my own gymnastics workouts.

Below is the actual App Flow
![GT Progression Flow](https://github.com/Jbays/gymnastics-tracker/blob/master/src/assets/progression-app-flow.png "How To Use GT for Progressions")

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