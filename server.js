const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

let lastMessage = 'Leave a message for the next person who texts me!';

app.get('/', (req, res) => {
  const twiml = new MessagingResponse();

  if (req.query.Body === '?') {
    twiml.message("Hi! Send me a message and I'll send it to the next person who texts me. After you give me a message, I'll send you the last message I got. Make sure to leave something nice!")
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