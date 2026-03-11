import { userRepository } from "../repositories/user.repository";
import { UserModel } from "../models/user.model";
import type { User } from "../types/user.type";

export const userService = {
  getAllUsers(): UserModel[] {
    return userRepository.findAll().map(u => new UserModel(u));
  },

  create(user: User) {
    if (!user.name || !user.role) {
      throw new Error("Name and role required");
    }
    return userRepository.create(user);
  },


  update(id: number, user: User) {
    return userRepository.update(id, user);
  },

  // Implementasi delete (Tugas poin 3)
  delete(id: number) {
    return userRepository.delete(id);
  }
};


/* =========================
   SERVICE
   Tugas:
   1. pindahkan ke file khusus (user.service), dalam folder yang sesuai
   2. import user.repository, user.model, & user.type
   3. tambahkan delete(id: number) yang memanggil delete() dari userRepository
========================= */
