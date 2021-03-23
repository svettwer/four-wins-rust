const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());

// TODO: Add housekeeping for lobbies
const lobbies = []

function getRandomSessionId(){
  return Math.random().toString(36).substr(2, 9);
}

const useServerSentEventsMiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');

  // only if you want anyone to access this endpoint
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.flushHeaders();

  const sendEventStreamData = (data) => {
      res.write(JSON.stringify(data));
  }

  // we are attaching sendEventStreamData to res, so we can use it later
  Object.assign(res, {
      sendEventStreamData
  });

  next();
}

const streamRandomNumbers = (req, res) => {
  // We are sending anyone who connects to /stream-random-numbers
  // a random number that's encapsulated in an object
  let interval = setInterval(function generateAndSendRandomNumber(){
      const data = {
          value: Math.random(),
      };

      res.sendEventStreamData(data);
  }, 1000);

  // close
  res.on('close', () => {
      clearInterval(interval);
      res.end();
  });
}

app.get('/lobby/:sessionsId', useServerSentEventsMiddleware, 
  streamRandomNumbers)

app.get('/lobby', (req, res) => {
  res.send(JSON.stringify(lobbies))
})

app.post('/lobby', (req, res) => {
  const lobby = {
    sessionsId: getRandomSessionId(),
    players: [req.body.playerName]
  }
  lobbies.push(lobby)
  res.send(JSON.stringify(lobby))
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
