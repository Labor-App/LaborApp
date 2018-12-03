const path = require('path');
const express = require('express');
const app = express();

// Configuracion
app.set('port', process.env.PORT || 3000);

// Midllewares

// Static

app.use('/static', express.static(__dirname + '/'));

// Server Listen
app.listen(app.get('port'), () => {
  console.log('Server on port',app.get('port'));
})
