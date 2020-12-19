const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:/addToCart', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to mongoose');
  })
  .catch((err) => {
    console.log(err);
  });

const addToCartSchema = mongoose.Schema({
  shoename: { type: String },
  gender: { type: String },
  price: { type: String },
  size: [{ type: Number }],
  currentshoebigpictures: [{ type: String }],
  currentshoesmallpictures: [{ type: String }],
  othercolorways: [{ type: String }],
  colorway: { type: String },
  fit: { type: String },
  fitalert: { type: String},
  rating: { type: Number }
});

const addToCart = mongoose.model('addToCart', addToCartSchema);


module.exports = addToCart;
