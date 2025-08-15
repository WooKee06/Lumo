import { api } from "@/shared/api";

export const AuthApi = {
  login: (email: string, password: string) =>
    api.post("/auth/login", { email, password }),

  register: (email: string, password: string, name: string) =>
    api.post("/auth/register", { email, password, name }),

  logout: () => api.post("/auth/logout"),
};
