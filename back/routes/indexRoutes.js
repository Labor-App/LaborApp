const express = require('express');
const app = express();

app.use('/pdf', require('./pdfRoutes'));

app.use('/send', require('./emailRoutes'))

module.exports = app;
