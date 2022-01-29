const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
var expressWs = require('express-ws')(app);

app.use(bodyParser.json());

// TODO: Add housekeeping for lobbies
const lobbies = []

function getRandomSessionId(){
  return Math.random().toString(36).substr(2, 9);
}

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

app.ws('/lobby/:sessionsId', function(ws, req) {
  ws.on('message', function(msg) {
    if(lobbies.find(lobby => lobby.sessionsId === req.params.sessionsId)){
      console.log(msg);
      ws.send("received message " + msg + " for lobby " + req.params.sessionsId)
    }else{
      ws.send("unknown lobby")
    }
  });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
