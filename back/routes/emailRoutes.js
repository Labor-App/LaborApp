//Modulos
  const path = require('path');
  const router = require('express').Router();
  const { sendEmail } = require('../funcionalidad-email/sendEmail');
//


//Rutas
  router.get('/',  (req, res) => {

    sendEmail('andresarias510@gmail.com', 'jonathan');

  });
//
module.exports = router;
