const addToCart = require('./');

const shoeDisplay = {
  getOne: (item) => addToCart.find(item),
  getAll: () => addToCart.find().limit(4)
};



module.exports = shoeDisplay;