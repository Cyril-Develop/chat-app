const app = require("./app");
const https = require("https");
const fs = require("fs");

require("dotenv").config();

//Certificats SSL
const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/cyril-develop.fr/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/cyril-develop.fr/fullchain.pem"),
};

const server = https.createServer(options, app);
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});