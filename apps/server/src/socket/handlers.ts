import { ClientSocket } from "./types.js";
import { userManager } from "../users/index.js";

export function registerSocketHandlers(socket: ClientSocket) {
  console.log("🔥 NEW HANDLERS.TS LOADED");
  userManager.addUser(socket.id);

  console.log(`✅ Connected: ${socket.id}`);
  printOnlineUsers();

  socket.on("disconnect", () => {
    userManager.removeUser(socket.id);

    console.log(`❌ Disconnected: ${socket.id}`);
    printOnlineUsers();
  });
}

function printOnlineUsers() {
  const users = userManager.getUsers();

  console.log("\n══════════════════════════════");
  console.log(`👥 Online Users (${users.length})`);

  if (users.length === 0) {
    console.log("No users connected.");
  } else {
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.socketId}`);
    });
  }

  console.log("══════════════════════════════\n");
} 