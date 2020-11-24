const express = require('express');
const app = express();
<<<<<<< HEAD
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router.js');

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(bodyParser.json());
app.use('/product', router);

// app.get('/', function (req, res) {
//   res.send('hello world')
// })

// app.use('/api', router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
=======
const port = 3001;
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router.js');
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', router);


app.listen(port, () => {
  console.log(`Boot Locker listening @ ${port}`);
});
>>>>>>> solo
