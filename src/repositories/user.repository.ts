import { db } from "../config/db";
import type { User } from "../types/user.type";

export const userRepository = {
  findAll(): User[] {
    return db.query("SELECT id, name, role FROM users").all() as User[];
  },

  // Menambahkan user baru
  create(user: User) {
    return db.query("INSERT INTO users (name, role) VALUES (?, ?)")
      .run(user.name, user.role);
  },

  update(id: number, user: User) {
    return db.query("UPDATE users SET name = ?, role = ? WHERE id = ?")
      .run(user.name, user.role, id);
  },

  delete(id: number) {
    return db.query("DELETE FROM users WHERE id = ?").run(id);
  }
};