import { Room } from "./room.types.js";
import { randomUUID } from "node:crypto";

export class RoomManager {
  private rooms = new Map<string, Room>();

  createRoom(name: string): Room {
    const room: Room = {
      id: randomUUID(),
      name,
      users: new Set(),
      createdAt: new Date(),
    };

    this.rooms.set(room.id, room);

    return room;
  }

  getRoom(roomId: string) {
    return this.rooms.get(roomId);
  }

  getRooms() {
    return [...this.rooms.values()];
  }

  getRoomCount() {
    return this.rooms.size;
  }

  deleteRoom(roomId: string) {
    this.rooms.delete(roomId);
  }
}

export const roomManager = new RoomManager();