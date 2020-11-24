const mongoose = require('mongoose');

<<<<<<< HEAD
=======
mongoose.Promise = global.Promise;

>>>>>>> solo
mongoose.connect('mongodb://localhost:/addToCart', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to mongoose');
  })
  .catch((err) => {
    console.log(err);
  });

const addToCartSchema = mongoose.Schema({
  shoeName: { type: String },
  gender: { type: String },
  SKU: { type: String },
  price: { type: String },
  size: [{ type: Number }],
<<<<<<< HEAD
  currentShoePictures: [{ type: String }],
=======
  currentShoeBigPictures: [{ type: String }],
  currentShoeSmallPictures: [{ type: String }],
>>>>>>> solo
  otherColorWays: [{ type: String }],
  colorway: { type: String },
  fit: { type: String },
  fitAlert: { type: String},
  rating: { type: Number }
});

const addToCart = mongoose.model('addToCart', addToCartSchema);


<<<<<<< HEAD
module.exports = addToCart;

=======
module.exports = addToCart;
>>>>>>> solo
