import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, "/index.html"));
});

io.on("connection", (socket) => {
  console.log(`User connected to (server)🚀🚀 `);
  console.log(socket);
});

const PORT = 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
