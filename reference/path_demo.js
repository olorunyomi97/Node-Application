const path = require('path');

// Basename
console.log(path.basename(__filename))

// Directory name 
console.log(path.dirname(__filename))

// File extension
console.log(path.extname(__filename))

// Create path Object
console.log(path.parse(__filename).base)

// concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))