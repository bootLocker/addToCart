const router = require('express').Router();
const controller = require('./controller.js');


router
  .route('/shoeName/sku')
  .get(controller.get) // get all data on page