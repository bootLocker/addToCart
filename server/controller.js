const shoeDisplay = require('../db/model.js');


const controller = {
  getShoe: (req, res) => {
    console.log(req.params);
    var sku = req.params.sku;
    shoeDisplay.getOne({'SKU': sku})
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  }
};









module.exports = controller;