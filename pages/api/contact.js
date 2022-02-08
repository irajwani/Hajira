export default function (req, res) {
    try {
      require('dotenv').config()
      const { name, email, message } = req.body;
      let nodemailer = require('nodemailer')
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'hajira.mirzamaryam@gmail.com',
          pass: process.env.PASSWORD,
        },
        secure: true,
      })
      const mailData = {
        from: email,
        to: 'hajira.mirzamaryam@gmail.com',
        subject: `Message From ${name}`,
        text: message + " | Sent from: " + email,
        html: `<div>${message}</div><p>Sent from:
        ${email}</p>`
      }
      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })

      res.status(200).end()
    }
    catch (e) {
      res.status(400).end()
    }
}