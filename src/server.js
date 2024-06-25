const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(express.static('public'))

app.post('/send-email', (req, res)=>{
    const {name, email, subject, message } = req.body
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Contact Form Submission from ${subject}`,
    text: `You have a new message from your website contact form:
    Name: ${name}
    Email: ${email}
    Message: ${message}`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
        res.status(500).json({success: false, error: 'Error sending email'})

    }else {
        console.log('Email sent:'+ info.response)
        res.status(200).json({success: true})
    }
});


});

app.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`)
});