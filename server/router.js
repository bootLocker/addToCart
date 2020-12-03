const router = require('express').Router();
const controller = require('./controller.js');



router
  .route('/products')
  .get(controller.getAllShoes)
  .post(controller.postShoe);


router
  .route('/products/:_id')
  // console.log('hello from router')
  .get(controller.getOneShoe)
  .put(controller.updateShoe)
  .delete(controller.deleteShoe);


module.exports = router;

