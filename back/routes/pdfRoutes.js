//Modulos
  const router = require('express').Router();
  const { generarPdf, existe } = require('../funcionalidad-pdf/generarPdf');
  const { sendEmail } = require('../funcionalidad-email/sendEmail')
//


//Rutas
  router.get('/', (req, res) => {

    const doc = {


      pageMargins: [ 40, 60, 40, 60 ],
      pageOrientation: 'portrait',
      pageSize: 'A4',
      content: [


        {
          //Titulo
          text:'DEMANDA\n\n\n',bold:true,alignment: 'center',fontSize: 20
        },

        {
          //Parrafo
          text: [
            'Lorem ipsum dolor sit amet,',
            {text: `fsfdfdfd`, fontSize: 15, bold: true},
            ' consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
            {text: `fsfdfdfd`, fontSize: 15, bold: true},
            ' in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ], alignment: 'justify'
        },
        {
          text:`\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.`,
          alignment: 'justify'
        },
        {
          columns:[

            {
              text:[
                {text:`\n\n\n\n\n\n\n\n\n\n\n\n\n_____________________________\n`},
                {text:`dddsdsdsdsdsdsd`}

              ], alignment: 'center'
            },
            {
              text:[
                {text:`\n\n\n\n\n\n\n\n\n\n\n\n\n_____________________________\n`},
                {text:`dddsdsdsdsdsdsd`}

              ], alignment: 'center'
            }
          ]
        },


      ]

    };

    let nombre =  'Jonathan';

    let result =  generarPdf(doc, nombre);

    if (existe(result.direccion)) {

      console.log(result.message);
      sendEmail(['andresarias510@gmail.com','jonathanandresarias510@gmail.com'], 'Jonathan');
      res.download(result.direccion);

    }else {
      res.json({
        ok: false,
        err: 'PDF no existe'
      });
    }

  });



//
module.exports = router;
