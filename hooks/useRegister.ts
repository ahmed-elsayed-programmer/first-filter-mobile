"use client";

import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "expo-router";
import { ChangeEvent, FormEvent, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useToast } from "react-native-toast-notifications";

export default function UseRegister() {
  const router = useRouter();
  const toast = useToast();

  const [register, { isLoading }] = useRegisterMutation();
  const [first_name, setFirstname] = useState("");
  const [last_name, setLasttname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");

  const onSubmit = () => {
    register({ first_name, last_name, email, password, re_password })
      .unwrap()
      .then(() => {
        router.push("/login");
        toast.show(" تم إنشاء الحساب بشكل ناجح ");
      })
      .catch((e: any) => {
        let error = e.data[Object.keys(e.data)[0]][0];

        toast.show(error);
        // toast.error(error)
      });
  };
  return {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    setFirstname,
    setLasttname,
    setEmail,
    setPassword,
    setRePassword,
    onSubmit,
  };
}
