export interface ConnectedUser {
  socketId: string;
  userId?: string;
  username?: string;
  roomId?: string;
  connectedAt: Date;
}