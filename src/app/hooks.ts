import { useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
