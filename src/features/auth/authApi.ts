import api from "../../utils/axios";
import type { LoginInput, SignupInput } from "../../utils/validationSchemas";

export const loginRequest = async (data: LoginInput) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export const singupRequest = async (data: SignupInput) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};
