const API_URL = "http://localhost:3000";

export async function getHealth() {
  const response = await fetch(`${API_URL}/health`);

  if (!response.ok) {
    throw new Error("Server unavailable");
  }

  return response.json();
}