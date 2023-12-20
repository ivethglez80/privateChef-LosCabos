const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
    host: process.env._HOST,
    port: process.env._PORT,
    secure: false, // true for 465, false for other ports like 587
    auth: {
        user: process.env._MAIL, // generated ethereal user
        pass: process.env._PASSWORD, // generated ethereal password
    },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
    try {
    const { nombre, apellido, email, whatsapp, residence, date, people, consulta } = req.body;
    console.log(nombre, apellido, email, whatsapp, residence, date, people, consulta);

    var mailOptions = {
        from: email, // Utiliza la dirección de correo electrónico del visitante como remitente
        to: process.env._MAIL, // Utiliza la dirección de correo electrónico del propietario del sitio como destinatario
        subject: 'Consulta del sitio web', // Asunto del correo
        text: `
      Nombre: ${nombre}
      Apellido: ${apellido}
      Email: ${email}
      Numero de WhatsApp: ${whatsapp}
      Lugar de residencia: ${residence}
      fecha de servicio: ${date}
      cantidad de personas: ${people}
      Consulta: ${consulta}      
    `
    };

    await transporter.sendMail(mailOptions);
    console.log("email sent succesfully");

    res.status(200).json({message: "Email sent succesfully"});
} catch (error) {
    console.log(error.message);
    res.status(500).json({message: "internal server error"});
}
});

module.exports = { sendEmail };