const express = require('express');
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const MessagingResponse = twilio.twiml.MessagingResponse;

const app = express();

let lastMessage = 'Leave a message for the next person who texts me!';

app.get('/', (req, res) => {
  const twiml = new MessagingResponse();

  if (req.query.Body === '?') {
    twiml.message("Hi! ✨\n\nSend me a message and I'll store it for the next person. Then I'll send you the last message I have stored. 💁")
  } else {
    twiml.message(lastMessage || "You're amazing!");
    lastMessage = req.query.Body;
  }

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port 5000');
});