import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "../../app/hooks";
import { loginRequest, singupRequest } from "./authApi";
import { login } from "./authSlice";
import { notifyError, notifySuccess } from "../ui/uiSlice";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      navigate("/");
      dispatch(login(data.data));
      dispatch(notifySuccess(data.message));
    },
    onError: (data: any) => {
      dispatch(notifyError(data.response.data.message));
    },
  });
};

export const useSignup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: singupRequest,
    onSuccess: (data) => {
      dispatch(notifySuccess(data.message));
      navigate("/auth/signin");
    },
    onError: (data: any) => {
      dispatch(notifyError(data.response.data.message));
    },
  });
};
