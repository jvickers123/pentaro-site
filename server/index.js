import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import twilio from 'twilio'




//twilio requirements -- Texting API 
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.envTWILIO_AUTH_TOKEN; 
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
app.get('/send-text', (_req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    // const {textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: 'whatsup',
        to: 'whatsapp:+447954549514',  // Text this number
        from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}` // From a valid Twilio number
    }).then(message => console.log(message))
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });


})

app.listen(process.env.PORT, () => console.log(`Running on Port ${process.env.PORT}`))