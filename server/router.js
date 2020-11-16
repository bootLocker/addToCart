const router = require('express').Router();
const controller = require('./controller.js');



router
  .route('/')
  .get(controller.getAllShoes);


router
  .route('/:sku')
  // console.log('hello from router')
  .get(controller.getOneShoe);


module.exports = router;