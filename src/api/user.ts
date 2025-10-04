import api from "../utils/axios";
import type { passwordInput, ProfileInput } from "../utils/validationSchemas";

export const fetchUser = async () => {
  const res = await api.get("/user/me");
  return res.data;
};

export const updateUser = async (updatedData: ProfileInput) => {
  const res = await api.put("/user/me", updatedData);
  return res.data;
};

export const deleteuser = async () => {
  const res = await api.delete("/user/me");
  return res.data;
};

export const updatePassword = async (data: passwordInput) => {
  const res = await api.put("/user/me", data);
  return res.data;
};
