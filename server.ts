import express, { Request, Response } from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import path from "path";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, "/index.html"));
});

io.on("connection", (socket : Socket) => {
  //Browser connect
  console.log(`User Connect To (Server)🚀🚀 `);


  //send to client (browser)
  socket.on('message' , (message : string)  => {
    io.emit('message' , message)
  })



  //Browser disconnect
  socket.on("disconnect", () => {
    console.log(`User Disconnect From (Server)🚀🚀 `);
  });
});

const PORT = 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
