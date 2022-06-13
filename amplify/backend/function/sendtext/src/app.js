/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

require('dotenv/config')

const twilio = require('twilio')
const sgMail = require('@sendgrid/mail')

//twilio requirements -- Texting API 
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.envTWILIO_AUTH_TOKEN; 
const client = new twilio(accountSid, authToken);
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

/****************************
* Example post method *
****************************/

app.post('/send-text', function(req, res) {
  // Add your code here
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
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/send-email', function(req, res) {
  // Add your code here
  //Welcome Message
  res.send('Hello to the Twilio Server')
  const {full_name, email, company_name, message, phone_number} = req.body
  const msg = {
    to: 'jonathanbvickers@gmail.com', // Change to your recipient
    from: email, // Change to your verified sender
    subject: `New Enqiry From ${full_name}, ${company_name}`,
    text: message,
    html: `<p>New Enquiry from ${full_name}, ${company_name}<p>
    <br>
    <p>${message}</p>
    <br>
    <p>Reply To:<p>
    <a href = "mailto: ${email}">${email}</a>
    <p>or call<p>
    <p>${phone_number}</p>
    `,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/send-enquiry', function(req, res) {
  // Add your code here
  //Welcome Message
  res.send('Hello to the Twilio Server')
  const {full_name, email, phone_number} = req.body
  const msg = {
    to: 'jonathanbvickers@gmail.com', // Change to your recipient
    from: email, // Change to your verified sender
    subject: `Quick Enqiry From ${full_name}`,
    text: 'message',
    html: `<p>Quick Enquiry from ${full_name}<p>
    <br>
    <p>Email:<p>
    <a href = "mailto: ${email}">${email}</a>
    <br>
    <p>Phone Number:<p>
    <p>${phone_number}</p>
    `,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
