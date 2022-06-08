const config = require('dotenv/config')

const express = require('express')
const cors = require('cors')
const twilio = require('twilio')
const sgMail = require('@sendgrid/mail')




//twilio requirements -- Texting API 
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.envTWILIO_AUTH_TOKEN; 
const client = new twilio(accountSid, authToken);
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

app.use(express.json())

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})




//Twilio 
app.post('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')
    const {message} = req.body
    //Send Text
    client.messages.create({
        body: message,
        to: 'whatsapp:+447954549514',  // Text this number
        from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}` // From a valid Twilio number
    }).then(message => console.log(message))
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
    const msg = {
      to: 'jonathanbvickers@gmail.com', // Change to your recipient
      from: 'jonathanbvickers@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: message,
      html: `<strong>${message}</strong>`,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })


})

app.listen(process.env.PORT, () => console.log(`Running on Port ${process.env.PORT}`))