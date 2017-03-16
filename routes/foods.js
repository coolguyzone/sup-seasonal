'use strict';

const express = require('express');
const app = express();
const knex = require('../knex.js');
const bookshelf = require('../bookshelf');
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/foods', (req, res) => {
  Food.forge()
  .fetch()
  .then((collection) => res.status(200).json(collection));
})

module.exports = router;
