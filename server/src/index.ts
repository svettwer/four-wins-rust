import express from 'express';
import bodyParser from 'body-parser';

import expressWs from 'express-ws';

const port = 3000

const { app, getWss, applyTo } = expressWs(express());

app.use(bodyParser.json());

interface Lobby{
  sessionsId: string;
  players: any[];
}

// TODO: Add housekeeping for lobbies
const lobbies: Lobby[] = []

function getRandomSessionId(){
  return Math.random().toString(36).substring(2, 9);
}

app.get('/lobby', (req, res) => {
  res.send(JSON.stringify(lobbies))
})

app.post('/lobby', (req, res) => {
  const lobby: Lobby = {
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
