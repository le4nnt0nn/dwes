const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

// Génerico de respuesta
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// Transport mailhog
const transporter = nodemailer.createTransport({
  host: "mailhog",
  port: 1025
});

// Mandar email a través de la ruta
// localhost:300/send_email/testing@test.com
app.get("/send_email/:email", (req, res) => {
  const { email } = req.params;

  const messageStatus = transporter.sendMail({
    from: "Antonio Cortés <antoniocortes@cockatiel.com>",
    to: email,
    subject: "Un asunto!",
    text: "Este es el contenido del email",
  });

  // Control de errores
  if (!messageStatus) res.json("Error sending message!").status(500);

  res.json("Sent!").status(200);
});