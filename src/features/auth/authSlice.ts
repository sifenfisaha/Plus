import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "./auth.types";
import {
  loadFromStorage,
  RemoveFromStorage,
  saveToStorage,
} from "../../utils/storage";

const storedToken = loadFromStorage("token");
const storedUser = loadFromStorage("user");

const initialState: AuthState = {
  user: storedUser,
  token: storedToken,
  isAuthenticated: !!storedToken,
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      saveToStorage("user", action.payload.user);
      saveToStorage("token", action.payload.token);
      saveToStorage("loginTime", Date.now().toString());
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      RemoveFromStorage("token");
      RemoveFromStorage("user");
      RemoveFromStorage("loginTime");
    },
    updateProfile: (state, action: PayloadAction<User>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { login, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;
