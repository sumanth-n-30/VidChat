import http from "node:http";

import app from "./app.js";
import { initializeSocket } from "./socket/index.js";

export const httpServer = http.createServer(app);

export const io = initializeSocket(httpServer);