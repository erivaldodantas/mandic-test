const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./src/routers')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/api', api)

const port = process.env.PORT || 3030
app.listen(port, () => console.log(`\Poker Game API Runing in ${port}`))