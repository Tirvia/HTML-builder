const path = require('path');
const fs = require('fs');
let reader = fs.createReadStream(
    path.join(__dirname, 'text.txt')
);  
reader.on('data', function (chunk) {
    console.log(chunk.toString());
});