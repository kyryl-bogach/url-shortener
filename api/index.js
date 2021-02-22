const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

const db = require('./db')
const linkRouter = require('./routes/link-router')

const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', linkRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
