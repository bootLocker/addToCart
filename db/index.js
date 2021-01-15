const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


const uri = `mongodb+srv://${process.env.mongoDbUser}:${process.env.mongoDbPass}@inkorporated.utm91.mongodb.net/${process.env.mongoDb}?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
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
  currentShoeBigPictures: [{ type: String }],
  currentShoeSmallPictures: [{ type: String }],
  otherColorWays: [{ type: String }],
  colorway: { type: String },
  fit: { type: String },
  fitAlert: { type: String},
  rating: { type: Number }
});

const addToCart = mongoose.model('addToCart', addToCartSchema);


module.exports = addToCart;
