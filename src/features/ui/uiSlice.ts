import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { saveToStorage, loadFromStorage } from "../../utils/storage";
import toast from "react-hot-toast";

interface UiState {
  theme: "light" | "dark";
  modal: string | null;
  sidebar: boolean;
}

const storedTheme = (loadFromStorage("theme") as "light" | "dark") || "light";

const initialState: UiState = {
  theme: storedTheme,
  modal: null,
  sidebar: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      saveToStorage("theme", state.theme);
      toast.success(`Switched to ${state.theme} mode`);
    },
    notifySuccess: (_, action: PayloadAction<string>) => {
      toast.success(action.payload);
    },
    notifyError: (_, action: PayloadAction<string>) => {
      toast.error(action.payload);
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.modal = action.payload;
    },
    closeModal: (state) => {
      state.modal = null;
    },
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});

export const {
  toggleTheme,
  notifySuccess,
  notifyError,
  openModal,
  closeModal,
  toggleSidebar,
} = uiSlice.actions;

export default uiSlice.reducer;
