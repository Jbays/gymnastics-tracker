const allStretchSeedData = require('../data/processedStretchSeeds');

exports.seed = (knex, Promise) =>{
  return knex('stretches_progressions_mastery').del()
    .then( () =>{
      return knex('stretches_progressions_mastery').insert(allStretchSeedData);
    });
};
