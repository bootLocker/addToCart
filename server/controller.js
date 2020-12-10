const shoeDisplay = require('../db/model.js');
const db = require('../db/index.js');
const pg = require('../db/postgres.js');

const controller = {
  getOneShoe: (req, res) => {
    var _id = req.params._id;
  //   shoeDisplay.getOne({ '_id': _id })
  //     .then((results) => {
  //       res.status(200).send(results);
  //     })
  //     .catch((err) => {
  //       res.status(404).send(err);
  //     });
    pg.query(`SELECT * FROM products WHERE _id = ${_id}`)
      .then((results) => {
        res.status(200).send(results.rows);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  postShoe: (req, res) => {
    // db.create(req.body)
    //   .then(() => {
    //     res.status(200).end();
    //   })
    //   .catch((err) => {
    //     res.status(404).send(err);
    //   });
    let query = `INSERT INTO products (shoeName, gender, price, size, currentShoeBigPictures, currentShoeSmallPictures, otherColorWays, colorway, fit, fitAlert, rating) VALUES ('${req.body.shoename}', '${req.body.gender}', '${req.body.price}', '{${req.body.size}}', '{${req.body.currentshoebigpictures}}', '{${req.body.currentshoesmallpictures}}', '{${req.body.othercolorways}}', '${req.body.colorway}', '${req.body.fit}', '${req.body.fitalert}', ${req.body.rating})`;
    console.log(query)
    pg.query(query)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  deleteShoe: (req, res) => {
    // db.findOneAndDelete({_id: req.params._id})
    //   .then(() => {
    //     res.status(200).end();
    //   })
    //   .catch((err) => {
    //     res.status(404).send(err);
    //   });
    let query = `DELETE FROM products WHERE _id = ${req.params._id}`;
    pg.query(query)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  updateShoe: (req, res) => {
    // db.findOneAndUpdate({_id: req.params._id}, req.body)
    //   .then(() => {
    //     res.status(200).end();
    //   })
    //   .catch((err) => {
    //     res.status(404).send(err);
    //   });
    let update = '';
    for (var key in req.body) {
      update += key + ' = \'' + req.body[key] + '\', ';
    }
    let query = `UPDATE products SET ${update.slice(0, update.length - 2)} WHERE _id = ${req.params._id}`;
    console.log(query);
    pg.query(query)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  getAllShoes: (req, res) => {
    // shoeDisplay.getAll({})
    //   .then((results) => {
    //     res.status(200).send(results);
    //   })
    //   .catch((err) => {
    //     res.status(404).send(err);
    //   });
    pg.query(`SELECT * FROM products
              WHERE _id > 9000000
              LIMIT 4`)
      .then((results) => {
        res.status(200).send(results.rows);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  }
};









module.exports = controller;