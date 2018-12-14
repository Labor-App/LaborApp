const express = require('express');
const app = express();



app.use( require('./emailRoutes'));
app.use( require('./pdfRoutes'));


module.exports = app;
