import express from 'express';
import bodyParser from 'body-parser';
import expressWs from 'express-ws';
import * as dotenv from 'dotenv'

dotenv.config();

const port = 3000

const { app, getWss, applyTo } = expressWs(express());

app.use(bodyParser.json());

if(process.env.ENVIRONMENT == "dev"){
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}

interface Lobby{
  lobbyId: string;
  players: any[];
}

// TODO: Add housekeeping for lobbies
const lobbies: Lobby[] = []

function getRandomSessionId(){
  return Math.random().toString(36).substring(2, 9);
}

app.get('/api/lobby', (req, res) => {
  res.send(JSON.stringify(lobbies))
})

app.get('/api/lobby/:lobbyId', (req, res) => {
  res.send(JSON.stringify(
    lobbies.find(lobby => lobby.lobbyId ===  req.params.lobbyId)))
})

app.post('/api/lobby', (req, res) => {
  const lobby: Lobby = {
    lobbyId: getRandomSessionId(),
    players: [req.body.playerName]
  }
  lobbies.push(lobby)
  res.send(JSON.stringify(lobby))
})

app.ws('/api/lobby/:lobbyId', function(ws, req) {
  ws.on('message', function(msg) {
    if(lobbies.find(lobby => lobby.lobbyId === req.params.lobbyId)){
      ws.send("received message " + msg + " for lobby " + req.params.lobbyId)
    }else{
      ws.send("unknown lobby")
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
