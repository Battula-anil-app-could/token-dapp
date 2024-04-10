const fs = require('fs');

const privateKey = fs.readFileSync("./privatekey.text").toString().trim();
const infuraApiKey = fs.readFileSync("./infura.text").toString().trim();

console.log(privateKey)
console.log(infuraApiKey)