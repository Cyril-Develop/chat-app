const fs = require("fs");
const { PeerServer } = require("peer");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PEER_PORT || 9000;

const peerServer = PeerServer({
  port: PORT,
  ssl: {
    key: fs.readFileSync("/etc/letsencrypt/live/cyril-develop.fr/privkey.pem"),
    cert: fs.readFileSync(
      "/etc/letsencrypt/live/cyril-develop.fr/fullchain.pem"
    ),
  },
  path: process.env.PEER_PATH,
});

peerServer.on("connection", (client) => {
  console.log(`Un nouveau client est connecté: ${client.id}`);
});

peerServer.on("disconnect", (client) => {
  console.log(`Le client avec ID ${client.id} s'est déconnecté`);
});

console.log(
  `PeerServer is running at https://cyril-develop.fr:${PORT}/${process.env.PEER_PATH}`
);
