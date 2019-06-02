const express = require('express')
const poker = require('./Poker')

const api = express()

api.use('/poker', poker)

module.exports = api