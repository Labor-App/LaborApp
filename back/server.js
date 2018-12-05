//Modulos
  const path = require('path');
  const fs = require('fs');

  const express = require('express');
  const app = express();

  const pdfMakePrinter = require('pdfmake/src/printer');
//

//Funcionalidad-PDF





  function generatePdf(docDefinition, callback) {
  try {
  const fontDescriptors = {
    Roboto: {
        normal: path.join(__dirname, './fuentes/Roboto-Regular.ttf'),
        bold: path.join(__dirname, './fuentes/Roboto-Medium.ttf'),
        italics: path.join(__dirname, './fuentes/Roboto-Italic.ttf'),
        bolditalics: path.join(__dirname, './fuentes/Roboto-MediumItalic.ttf')
  }
  };
  const printer = new pdfMakePrinter(fontDescriptors);
  const doc = printer.createPdfKitDocument(docDefinition);



  doc.pipe(
      fs.createWriteStream('docs/filename.pdf').on("error", (err) => {
        callback(err.message);
      })
  );
  doc.on('end', () => {
    callback("PDF successfully created and stored");
  });

  doc.end();

  } catch(err) {
  throw(err);
  }
  };



app.get('/pdf', (req, res) => {

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

  generatePdf(document, (response) => {

    res.send(response); // sends a base64 encoded string to client
  });


})
//








//Static Files
app.use(express.static(path.join(__dirname, '../front/dist/LaborApp')));




app.listen(3000, () => console.log('server on port 3000'));
