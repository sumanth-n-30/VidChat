import "dotenv/config";

import { httpServer } from "./server.js";

const PORT = Number(process.env.PORT) || 3000;

httpServer.listen(PORT, () => {
  console.log(`🚀 VidChat Server running on http://localhost:${PORT}`);
});