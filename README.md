# message-forward

Send a message forward. Uses Twilio to receive a message, store the content, and send the previous saved message back to the user.

## Usage

This project is currently deployed on Heroku (thus the `Procfile`) and has no web interface. Send `?` to `5104661283` for instructions. Any other text will be stored as a message and you will receive the previous user's message in response.