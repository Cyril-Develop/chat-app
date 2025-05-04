const { PeerServer } = require("peer");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PEER_PORT || 9000;

const peerServer = PeerServer({
  port: PORT,
  path: process.env.PEER_PATH,
  allow_discovery: true,
});

peerServer.on('connection', (client) => {
  console.log(`Un nouveau client est connecté: ${client.id}`);
});

peerServer.on('disconnect', (client) => {
  console.log(`Le client avec ID ${client.id} s'est déconnecté`);
});

console.log(`PeerServer is running at http://localhost:${PORT}${process.env.PEER_PATH}`);
