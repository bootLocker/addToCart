const shoeDisplay = require('../db/model.js');


const controller = {
  getOneShoe: (req, res) => {
    var _id = req.params._id;
    shoeDisplay.getOne({ '_id': _id })
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  getAllShoes: (req, res) => {
    shoeDisplay.getAll({})
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  }
};









module.exports = controller;