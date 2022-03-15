const express = require('express');
const bodyParser = require('body-parser')

var app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", require('./api'))

module.exports = app