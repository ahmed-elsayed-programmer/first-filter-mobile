import { useVerifyMutation } from "@/redux/features/authApiSlice";
import { finishIntialLoad, logout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useEffect } from "react";

const UseVerify = () => {
  const dispatch = useAppDispatch();

  const [verify] = useVerifyMutation();

  useEffect(() => {
    verify(undefined)
      .unwrap()
      .catch(() => {
        dispatch(logout());
      })
      .finally(() => {
        dispatch(finishIntialLoad());
      });
  }, [verify]);
};

export default UseVerify;
