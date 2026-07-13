import { ConnectedUser } from "./user.types.js";

export class UserManager {
  private users = new Map<string, ConnectedUser>();

  addUser(socketId: string) {
    this.users.set(socketId, {
      socketId,
      connectedAt: new Date(),
    });
  }

  removeUser(socketId: string) {
    this.users.delete(socketId);
  }

  getUser(socketId: string) {
    return this.users.get(socketId);
  }

  getUsers() {
    return [...this.users.values()];
  }

  getUserCount() {
    return this.users.size;
  }
}

export const userManager = new UserManager();