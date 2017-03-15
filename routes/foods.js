'use strict';

const express = require('express');
const app = express();
const knex = require('../knex.js');
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/foods', (req, res) => {
  knex('foods')
    .orderBy('food_name')
    .then((foods) => {
      res.status(200).json(foods);
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
});

module.exports = router;
