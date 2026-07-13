import { useEffect, useState } from "react";
import { getHealth } from "./services/api/health.api";
import type { HealthResponse } from "./types/health";

export default function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchHealth() {
      try {
        const response = await getHealth();
        setHealth(response);
      } catch (err) {
        console.error(err);
        setError("Unable to connect to the backend.");
      } finally {
        setLoading(false);
      }
    }

    fetchHealth();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🚀 VidChat</h1>

      <hr />

      <h2>Backend Status</h2>

      <p>
        <strong>Status:</strong> {health?.status}
      </p>

      <p>
        <strong>Service:</strong> {health?.service}
      </p>
    </div>
  );
}