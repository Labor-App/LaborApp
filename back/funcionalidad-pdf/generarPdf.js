const PdfMakePrinter = require('pdfmake/src/printer');
const fs = require('fs');
const path = require('path');


let generarPdf = (docDefinition, docName) => {


    //Fuente
    const fontDescriptors = {
      Roboto: {
        normal: path.join(__dirname, './fuentes/Roboto-Regular.ttf'),
        bold: path.join(__dirname, './fuentes/Roboto-Medium.ttf'),
        italics: path.join(__dirname, './fuentes/Roboto-Italic.ttf'),
        bolditalics: path.join(__dirname, './fuentes/Roboto-MediumItalic.ttf')
      }
    };
    //

    const printer = new PdfMakePrinter(fontDescriptors);
    const doc = printer.createPdfKitDocument(docDefinition);

    const chunks = [];

    let resultado;

    doc.on('data', (chunk) => {
      chunks.push(chunk);
    });

    doc.on('end', () => {
      const result = Buffer.concat(chunks);
      fs.writeFileSync(path.join(__dirname, `/docs/Demanda-${ docName }.pdf`), result);
    });

    doc.end();

    return {
      message: 'Documento creado',
      direccion: path.join(__dirname, `/docs/Demanda-${ docName }.pdf`)
    };



}

let existe = (direccion) => {
  try {
    fs.accessSync(direccion , fs.constants.R_OK | fs.constants.W_OK);
    return true;
  } catch (err) {
    
    return false;
  }


}

module.exports = {
  generarPdf,
  existe
};
