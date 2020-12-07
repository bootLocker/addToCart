const csvtojson = require("csvtojson");
const converter = csvtojson()
csvtojson({
  delimiter: '|'
})
  .fromFile("./db/data.csv")
  .then(csvData => {
    console.log(csvData);
  });
