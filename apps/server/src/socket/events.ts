export const SocketEvents = {
  CONNECTION: "connection",
  DISCONNECT: "disconnect",

  // Rooms
  JOIN_ROOM: "room:join",
  LEAVE_ROOM: "room:leave",

  // Chat
  CHAT_MESSAGE: "chat:message",
  TYPING: "chat:typing",

  // WebRTC
  WEBRTC_OFFER: "webrtc:offer",
  WEBRTC_ANSWER: "webrtc:answer",
  WEBRTC_ICE: "webrtc:ice",
} as const;