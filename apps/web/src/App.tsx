import { useEffect } from "react";
import { socket } from "./services/socket/socket";

function App() {
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("✅ Connected");
      console.log("Socket ID:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>VidChat</h1>
      <p>Socket.IO Connection Test</p>
    </div>
  );
}

export default App;