const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

let lastMessage = 'Leave a message for the next person who texts me!';

app.get('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message(lastMessage);

  lastMessage = req.query.Body;

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.listen(1337, () => {
  console.log('Express server listening on port 1337');
});