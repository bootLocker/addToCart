const addToCart = require('./');

const shoeDisplay = {
  getOne: (item) => addToCart.find(item)
};



module.exports = shoeDisplay;