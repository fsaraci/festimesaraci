const fs = require('fs')
const arrayJson = JSON.parse(fs.readFileSync('./number.json'))

module.exports = arrayJson