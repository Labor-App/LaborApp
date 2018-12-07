const PdfMakePrinter = require('pdfmake/src/printer');
const fs = require('fs');
const path = require('path');

// let generatePdf = async (docDefinition) => {
//
//
//     //Fuente
//     const fontDescriptors = {
//       Roboto: {
//         normal: path.join(__dirname, './fuentes/Roboto-Regular.ttf'),
//         bold: path.join(__dirname, './fuentes/Roboto-Medium.ttf'),
//         italics: path.join(__dirname, './fuentes/Roboto-Italic.ttf'),
//         bolditalics: path.join(__dirname, './fuentes/Roboto-MediumItalic.ttf')
//       }
//     };
//
//     //Clase printer
//     const printer = new PdfMakePrinter(fontDescriptors);
//
//     //Creando el pdf
//     const doc = printer.createPdfKitDocument( docDefinition );
//
//     //Manipulacion del pdf
//
//       //Almacenando el pdf localmente.
//       doc.pipe( fs.createWriteStream( path.join(__dirname, './docs/filname.pdf'))
//       .on('error', err => {
//         throw new Error(err.message);
//       }));
//
//       doc.end();
//     //
//
//     return ('PDF creado exitosamente');
// };


function generatePdf(docDefinition, callback) {
  try {

    //Fuente
    const fontDescriptors = {
      Roboto: {
        normal: path.join(__dirname, './fuentes/Roboto-Regular.ttf'),
        bold: path.join(__dirname, './fuentes/Roboto-Medium.ttf'),
        italics: path.join(__dirname, './fuentes/Roboto-Italic.ttf'),
        bolditalics: path.join(__dirname, './fuentes/Roboto-MediumItalic.ttf')
      }
    };
    const printer = new PdfMakePrinter(fontDescriptors);
    const doc = printer.createPdfKitDocument(docDefinition);



    doc.pipe(
        fs.createWriteStream(path.join(__dirname, '/docs/filname.pdf')).on("error", (err) => {
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

module.exports = {
  generatePdf
};
