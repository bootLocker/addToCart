// require('newrelic');
const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router.js');
const morgan = require('morgan');
const shrinkRay = require('shrink-ray-current')

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(shrinkRay());
app.use(bodyParser.json());
// app.use(morgan('dev'));
app.use('/api', router);


app.listen(port, () => {
  console.log(`Boot Locker listening @ ${port}`);
});
