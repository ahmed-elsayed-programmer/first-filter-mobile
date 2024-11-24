import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useRouter } from "expo-router";
import { useAppDispatch } from "@/redux/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAuth } from "@/redux/features/authSlice";
import { useLoginMutation } from "@/redux/features/authApiSlice";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    login({ email, password })
      .unwrap()
      .then((data) => {
        const { access, refresh } = data;

        AsyncStorage.setItem("refresh_token", refresh);
        AsyncStorage.setItem("token", access);
        dispatch(setAuth(access));
        router.push("/(tabs)");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log("index token", token);

      if (token) {
        dispatch(setAuth(token));
        router.push("/(tabs)");
      }
    };

    checkAuth();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("@/assets/images/bg-login.jpg")}
        style={styles.bg}
      />
      <View style={styles.loginBox}>
        <Text style={styles.title}>مرحبا بك</Text>
        <Text style={styles.label}>الايميل</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <Text style={styles.label}>كلمة السر</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
        />

        <Pressable
          style={styles.btn}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
            تسجيل الدخول
          </Text>
        </Pressable>
        <Text style={{ marginTop: 30, width: "100%", textAlign: "center" }}>
          ليس لديك حساب ؟{"   "}
          <Link href={"/sign-up"} style={{ color: "red", fontWeight: "bold" }}>
            انشئ حساب جديد
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: "100%",
    height: 200,
  },
  loginBox: {
    flex: 1,
    alignItems: "flex-end",
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    marginTop: -25,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgb(148, 148, 148)",
  },
  input: {
    textAlign: "right",
    fontSize: 16,
    backgroundColor: "rgb(248, 248, 248)",
    width: "100%",
    padding: 10,
    marginTop: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgb(148, 148, 148)",
  },
  btn: {
    backgroundColor: "red",
    marginHorizontal: "auto",
    width: "100%",
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
  },
});

export default Index;
