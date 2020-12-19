

const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: '3.129.243.3',
  database: 'products',
  password: 'postgres',
});
client.connect()
  .catch((err) => {
    console.error(err);
  });

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
FROM '/home/mylonjones/hackreactor/postgresTest/addToCart/db/data.csv'
with DELIMITER as '|'
CSV HEADER;
`;

// client.query('DROP TABLE IF EXISTS products;', (err, res) => {

// });
// client.query(createTable, (err, res) => {
// });
// client.query(addRow, (err, res) => {
//   console.log(addRow)
//   console.log(err);
// });
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message); // Hello World!
  // client.end();
});

module.exports = client;