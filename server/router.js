const router = require('express').Router();
const controller = require('./controller.js');


router
  .route('/:sku')
  // console.log('hello from router')
  .get(controller.getShoe) // gets all data for one shoe



module.exports = router;