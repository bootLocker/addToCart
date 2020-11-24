const addToCart = require('./');

const shoeDisplay = {
  getOne: (item) => addToCart.find(item),
  getAll: () => addToCart.find()
};



module.exports = shoeDisplay;