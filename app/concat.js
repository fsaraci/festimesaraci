const array = require('./array')
const jsonArray = require('./jsonConv')
const lodash = require('lodash')

const concatedArray = lodash.concat(array,jsonArray.number)

module.exports = concatedArray