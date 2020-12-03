const data = require('./addrow.js');

const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  database: 'products',
  password: 'postgres',
});
client.connect();

let createTable = `CREATE TABLE products(
  _id SERIAL PRIMARY KEY,
  shoeName TEXT,
  gender TEXT,
  SKU TEXT,
  price TEXT,
  size NUMERIC[],
  currentShoeBigPictures TEXT[],
  currentShoeSmallPictures TEXT[],
  otherColorWays TEXT[],
  colorway TEXT,
  fit TEXT,
  fitAlert TEXT,
  rating INT
  );`;

let addRow = `
COPY products(
  shoeName,gender,SKU,price,size,currentShoeBigPictures,currentShoeSmallPictures,otherColorWays,colorway,fit,fitAlert,rating)
FROM '/home/mylonjones/hackreactor/addToCart/db/data.csv'
DELIMITER '|'
CSV HEADER;
`;
// let addRow = `INSERT INTO products(
//     shoeName,
//     gender,
//     SKU,
//     price,
//     size,
//     currentShoeBigPictures,
//     currentShoeSmallPictures,
//     otherColorWays,
//     colorway,
//     fit,
//     fitAlert,
//     rating) VALUES ${data}`;

client.query('DROP TABLE IF EXISTS products;', (err, res) => {

});
client.query(createTable, (err, res) => {
});
client.query(addRow, (err, res) => {
  console.log(err);
});
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message); // Hello World!
  // client.end();
});

module.exports = client;