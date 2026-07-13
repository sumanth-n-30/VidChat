import { Server } from "socket.io";
import { Server as HTTPServer } from "node:http";

import { registerSocketHandlers } from "./handlers.js";
import { SocketEvents } from "./events.js";

export function initializeSocket(server: HTTPServer) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on(SocketEvents.CONNECTION, (socket) => {
    registerSocketHandlers(socket);
  });

  return io;
}