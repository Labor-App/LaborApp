//Modulos
  const path = require('path');
  const express = require('express');
  const app = express();
//


//Rutas
// const pdfRoutes = require('./routes/pdfRoutes');


app.use('/pdf', require('./routes/pdfRoutes'));




//Static Files
app.use(express.static(path.join(__dirname, '../front/dist/LaborApp')));




app.listen(3000, () => console.log('server on port 3000'));
