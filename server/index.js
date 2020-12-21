const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 8080;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", () => {
  console.log("New user joined");
  
  socket.on("disconnect", () => {
    console.log("User has left")
  });
});

app.use(router);


server.listen(PORT, () => console.log(`Server started on port ${PORT}`));