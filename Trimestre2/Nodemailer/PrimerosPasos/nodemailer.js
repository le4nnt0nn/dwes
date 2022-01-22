const nodemailer = require('nodemailer');
  
// Auth con gmail
// - Activar aplicaciones inseguras
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email@gmail.com',
        pass: '*****'
    }
});
  
// Contenido de email
let mailDetails = {
    from: 'email@gmail.com',
    to: 'client@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail with Nodemailer'
};
  
// COntrol de errores
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});