import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteuser,
  fetchUser,
  updatePassword,
  updateUser,
} from "../../api/user";
import { queryClient } from "../../app/queryClient";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../auth/authSlice";
import { notifyError, notifySuccess } from "../ui/uiSlice";
import { useNavigate } from "react-router-dom";

export const useUser = (id: string) => {
  return useQuery({ queryKey: ["user", id], queryFn: fetchUser });
};

export const useUpdateUser = () => {
  const dispach = useAppDispatch();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      dispach(notifySuccess(data.message));
    },
  });
};

export const useDeleteUser = () => {
  const dispach = useAppDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: deleteuser,
    onSuccess: (data) => {
      queryClient.removeQueries({ queryKey: ["user"] });
      dispach(logout());
      dispach(notifySuccess(data.message));
      navigate("/");
    },
    onError: (data: any) => {
      dispach(notifyError(data.response.data.message));
    },
  });
};

export const useUpdatePassword = () => {
  const dispach = useAppDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: updatePassword,
    onSuccess: (data) => {
      dispach(notifySuccess(data.message));
      navigate("/");
    },
    onError: (data: any) => {
      dispach(notifyError(data.response.data.message));
    },
  });
};
