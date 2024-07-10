const app = require("./app");
const http = require("http");
const server = http.createServer(app);
// const { Server } = require("socket.io");
// const socketHandlers = require("./socket");

const PORT = process.env.PORT || 5000;

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   socketHandlers(io, socket);
// });

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
