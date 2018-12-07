//Modulos
  const path = require('path');
  const router = require('express').Router();
  const { generatePdf } = require('../funcionalidad-pdf/generarPdf');
//


//Rutas
  router.get('/',  (req, res) => {

    const document = {


      pageMargins: [ 40, 60, 40, 60 ],
      pageOrientation: 'portrait',
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

    generatePdf(document, (mensaje) => {
    res.download(path.join(__dirname, '../funcionalidad-pdf/docs/Demanda.pdf'));
      console.log(mensaje);
    })

  });



//
module.exports = router;
