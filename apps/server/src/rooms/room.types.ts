export interface Room {
  id: string;
  name: string;
  users: Set<string>;
  createdAt: Date;
}