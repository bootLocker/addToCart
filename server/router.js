const router = require('express').Router();
const controller = require('./controller.js');



router
  .route('/')
  .get(controller.getAllShoes);


router
  .route('/:_id')
  // console.log('hello from router')
  .get(controller.getOneShoe);


module.exports = router;

