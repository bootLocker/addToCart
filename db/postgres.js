

const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  database: 'products',
  password: 'postgres',
});
client.connect();

//schema
let createTable = `CREATE TABLE products(
  _id SERIAL PRIMARY KEY,
  shoeName TEXT,
  gender TEXT,
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

//seed
let addRow = `
COPY products(
  shoeName,gender,price,size,currentShoeBigPictures,currentShoeSmallPictures,otherColorWays,colorway,fit,fitAlert,rating)
FROM '/home/mylonjones/hackreactor/addToCart/db/10,000,000Shoes.csv'
DELIMITER '|'
CSV HEADER;
`;

// client.query('DROP TABLE IF EXISTS products;', (err, res) => {

// });
// client.query(createTable, (err, res) => {
// });
// client.query(addRow, (err, res) => {
//   console.log(err);
// });
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message); // Hello World!
  // client.end();
});

module.exports = client;