import { makeAutoObservable } from "mobx";
import { AuthApi } from "../api/authApi";

class AuthStore {
  user: null | { email: string } = null;
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async register(email: string, password: string, name: string) {
    this.isLoading = true;

    try {
      const { data } = await AuthApi.register(email, name, password);
      this.user = data.user;
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  }
}

export const authStore = new AuthStore();
