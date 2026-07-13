import { apiFetch } from "./client";
import type { HealthResponse } from "../../types/health";

export function getHealth() {
  return apiFetch<HealthResponse>("/health");
}