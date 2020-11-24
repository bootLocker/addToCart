const router = require('express').Router();
const controller = require('./controller.js');


<<<<<<< HEAD
router
  .route('/shoeName/sku')
  .get(controller.get) // get all data on page
=======

router
  .route('/products')
  .get(controller.getAllShoes);


router
  .route('/products/:_id')
  // console.log('hello from router')
  .get(controller.getOneShoe);


module.exports = router;

>>>>>>> solo
