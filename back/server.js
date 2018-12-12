//Modulos
  const path = require('path');
  const express = require('express');
  const app = express();
//

let port = process.env.PORT || 3000;

//Rutas
  app.use('/pdf', require('./routes/pdfRoutes'));

  app.use('/send', require('./routes/emailRoutes'))
//


//Static Files
  app.use(express.static(path.join(__dirname, '../front/dist/LaborApp')));
//


app.listen(port, () => console.log(`server on port ${ port }`));
