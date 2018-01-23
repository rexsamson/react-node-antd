const express = require('express')
const path = require('path')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

require('./server/routes')(app)

app.listen(process.env.PORT || 8080)

console.log('Server is running at port:8080')
