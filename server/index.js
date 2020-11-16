const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router.js');
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/products', router);


app.listen(port, () => {
  console.log(`Boot Locker listening @ ${port}`);
});
