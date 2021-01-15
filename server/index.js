const express = require('express');
const app = express();
// const port = 3001;
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router.js');
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', router);


app.listen(process.env.PORT, () => {
  console.log(`Boot Locker listening @ ${process.env.PORT}`);
});
