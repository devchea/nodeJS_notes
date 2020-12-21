console.log(__filename)
//gets filename

console.log(__dirname)
//gets directory name
//

//how to export and import files and functions 
const num = [1 , 2 , 3 ]
const people = ['me', 'you', 'others']
module.exports = {
    num: num,// can also use num without key
    users: people
}
//stuff.js contains num

//in another file trying to import stuff.js and num
const numbers = require('./stuff.js')
console.log(num)
//=> [1 , 2 , 3 ]
console.log(numbers)
//=> [1 , 2 , 3 ]
  