const path = require('path');
const nodemailer = require('nodemailer');


let sendEmail = ( destinatario, nombre = null ) =>{

  let transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
      user: 'jonathancolombia510@gmail.com',
      pass: '123456jonathan'
    }
  });

  let text = `Hemos generado su demanda exitosament ${ nombre === null? '' : nombre }`;

  let mailOptions = {
    from: 'jonathancolombia510@gmail.com',
    to: `${ destinatario }`,
    subject: 'Hola desde node',
    text: text,
    attachments: {
      filename: 'demanda.pdf',
      path: path.join(__dirname, '../funcionalidad-pdf/docs/Demanda.pdf' )
    }
  };

  transporter.sendMail( mailOptions, (err, response) => {

    if (err) {
      console.log(err);
    }else{
      console.log('Email sent: ' + info.response);
    }
  });


}

module.exports = {
  sendEmail
}
