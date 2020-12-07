var fs = require('fs');
fs.writeFile('./db/tenMillion.json', '', (err) => {
  if (err) { throw err; }
  console.log('file overwritten');
});
var ws = fs.createWriteStream('./db/tenMillion.csv', { flags: 'a' });


//array of mock data for each field in the shoes
var shoeNameArr = ['adidas D.O.N. ISSUE #2'];
var genderArr = ['Men\'s'];
var priceArr = ['$100.00', '$110.00'];
var sizeArr = [[7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15,16,17,18]];
var currentShoeBigPicturesArr = [['https://images.footlocker.com/is/image/EBFL2/FU7385_a1?wid=630&hei=630&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FU7385_a2?wid=630&hei=630&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FU7385_a3?wid=630&hei=630&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FU7385_a4?wid=630&hei=630&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FU7385_a5?wid=630&hei=630&fmt=png-alpha'],['https://images.footlocker.com/is/image/EBFL2/FW8518_a1?wid=630&hei=630&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FW8518_a2?wid=630&hei=630&fmt=png-alpha'],['https://images.footlocker.com/is/image/EBFL2/FV8961_a1?wid=630&hei=630&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FV8961_a2?wid=630&hei=630&fmt=png-alpha'],['https://images.footlocker.com/is/image/EBFL2/FW8517_a1?wid=630&hei=630&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FW8517_a2?wid=630&hei=630&fmt=png-alpha']];
var currentShoeSmallPicturesArr = [['https://images.footlocker.com/is/image/EBFL2/FU7385_a1?wid=56&hei=56&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FU7385_a2?wid=56&hei=56&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FU7385_a3?wid=56&hei=56&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FU7385_a4?wid=56&hei=56&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FU7385_a5?wid=56&hei=56&fmt=png-alpha'],['https://images.footlocker.com/is/image/EBFL2/FW8518_a1?wid=56&hei=56&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FW8518_a2?wid=56&hei=56&fmt=png-alpha'],['https://images.footlocker.com/is/image/EBFL2/FV8961_a1?wid=56&hei=56&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FV8961_a2?wid=56&hei=56&fmt=png-alpha'],['https://images.footlocker.com/is/image/EBFL2/FW8517_a1?wid=56&hei=56&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FW8517_a2?wid=56&hei=56&fmt=png-alpha']];
var otherColorWaysArr = [['https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha'],['https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha'],['https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha'],['https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha','https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha']];
var colorwayArr = ['Mitchell, Donovan / Glory Mint/Signal Green/Solar Red','Solar Gold/Black/Solar Gold / Avail to ship early October','Signal Cyan/Black/Signal Cyan','Power Pink/Black/Power Pink'];
var fitArr = ['Width : Width - D - Medium'];
var fitAlertArr = ['Fit Alert: Item runs true to size. We suggest you order your normal size.'];
var ratingArr = [3];

//functions to randomly generate data
var shoeName = () => {
  var num = Math.floor(Math.random() * shoeNameArr.length);
  return shoeNameArr[num];
};
var gender = () => {
  var num = Math.floor(Math.random() * genderArr.length);
  return genderArr[num];
};
var price = () => {
  var num = Math.floor(Math.random() * priceArr.length);
  return priceArr[num];
};
var size = () => {
  var num = Math.floor(Math.random() * sizeArr.length);
  return sizeArr[num];
};
var currentShoeBigPictures = () => {
  var num = Math.floor(Math.random() * currentShoeBigPicturesArr.length);
  return currentShoeBigPicturesArr[num];
};
var currentShoeSmallPictures = () => {
  var num = Math.floor(Math.random() * currentShoeSmallPicturesArr.length);
  return currentShoeSmallPicturesArr[num];
};
var otherColorWays = () => {
  var num = Math.floor(Math.random() * otherColorWaysArr.length);
  return otherColorWaysArr[num];
};
var colorway = () => {
  var num = Math.floor(Math.random() * colorwayArr.length);
  return colorwayArr[num];
};
var fit = () => {
  var num = Math.floor(Math.random() * fitArr.length);
  return fitArr[num];
};
var fitAlert = () => {
  var num = Math.floor(Math.random() * fitAlertArr.length);
  return fitAlertArr[num];
};
var rating = () => {
  var num = Math.floor(Math.random() * ratingArr.length);
  return ratingArr[num];
};


//this function calls all the other functions and writes their randomly generated data to the csv file

var createRandomShoes = (amount) => {
  for (var i = 1; i <= amount; i++) {
    var currentShoe = {};
    currentShoe.shoename = shoeName();
    currentShoe.gender = gender();
    currentShoe.price = price();
    currentShoe.size = size();
    currentShoe.currentshoebigpictures = currentShoeBigPictures();
    currentShoe.currentshoesmallpictures = currentShoeSmallPictures();
    currentShoe.othercolorways = otherColorWays();
    currentShoe.colorway = colorway();
    currentShoe.fit = fit();
    currentShoe.fitalert = fitAlert();
    currentShoe.rating = rating();
    var data = JSON.stringify(currentShoe, null, 2);
    ws.write(data);
  }
};

for(var i = 0; i < 20; i++){
  createRandomShoes(100000);
  console.log(i);
}
ws.end();