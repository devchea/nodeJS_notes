console.log(__filename)
//gets filename

console.log(__dirname)
//gets directory name
//

//how to export and import files and functions 
const num = [1 , 2 , 3 ]
module.exports = num
//numbers.js contains num
//
const numbers = require('./numbers.js')
console.log(num);
//=> [1 , 2 , 3 ]

