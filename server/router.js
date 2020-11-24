const router = require('express').Router();
const controller = require('./controller.js');



router
  .route('/products')
  .get(controller.getAllShoes);


router
  .route('/products/:_id')
  // console.log('hello from router')
  .get(controller.getOneShoe);


module.exports = router;

