const shoeDisplay = require('../db/model.js');
const db = require('../db/index.js');
const pg = require('../db/postgres.js');

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
    // pg.query(`SELECT * FROM products WHERE _id = ${_id}`)
    //   .then((results) => {
    //     res.status(200).send(results.rows);
    //   })
    //   .catch((err) => {
    //     res.status(404).send(err);
    //   });
  },
  postShoe: (req, res) => {
    db.create(req.body)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  deleteShoe: (req, res) => {
    db.findOneAndDelete({_id: req.params._id})
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  updateShoe: (req, res) => {
    db.findOneAndUpdate({_id: req.params._id}, req.body)
      .then(() => {
        res.status(200).end();
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
    // pg.query(`SELECT * FROM products
    //           LIMIT 4`)
    //   .then((results) => {
    //     res.status(200).send(results.rows);
    //   })
    //   .catch((err) => {
    //     res.status(404).send(err);
    //   });
  }
};









module.exports = controller;