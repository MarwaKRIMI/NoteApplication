 const fs = require('fs')
 

const objStr= fs.readFileSync('notes.json')

const obj =JSON.parse(objStr) 
//fs.writeFileSync('notes.json', JSON.stringify(obj))
console.log(obj)
