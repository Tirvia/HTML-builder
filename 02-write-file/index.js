const fs = require('fs');
const path = require('path');
const output = fs.createWriteStream(
    path.join(__dirname, 'text.txt')
);  
const input = fs.createReadStream(
    path.join(__dirname, 'text.txt')
);

input.pipe(output);