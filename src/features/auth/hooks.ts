import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "../../app/hooks";
import { loginRequest, singupRequest } from "./authApi";
import { login, logout } from "./authSlice";
import { notifyError, notifySuccess } from "../ui/uiSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loadFromStorage } from "../../utils/storage";

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

export const useLogout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const loginTime = loadFromStorage("loginTime");
    const elapsed = Date.now() - parseInt(loginTime);
    const hour = 60 * 60 * 1000;
    if (elapsed >= hour) {
      dispatch(logout());
    } else {
      const timeout = setTimeout(() => {
        dispatch(logout());
      }, hour - elapsed);

      return () => clearTimeout(timeout);
    }
  }, [dispatch]);
};
