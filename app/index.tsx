// app/index.js

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Pressable,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { useToast } from "react-native-toast-notifications";

const PasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const storePassword = async (enteredPassword: string) => {
    try {
      await AsyncStorage.setItem("appPassword", enteredPassword);
    } catch (e) {
      console.error("Error storing the password:", e);
    }
  };

  const checkPassword = async () => {
    setLoading(true);
    axios
      .post("https://firstautoeg.com/api/verify-password/", { password })
      .then((res) => {
        if (res.data.success) {
          storePassword(password);
          router.push("/(tabs)"); // Navigate to the Tabs layout
        } else {
          toast.show("Incorrect password", {
            type: "danger",
          });
        }
      })
      .catch((err) => {
        console.error("Error verifying the password:", err);
        toast.show("Unable to verify password", {
          type: "danger",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const verifyStoredPassword = async () => {
      const storedPassword = await AsyncStorage.getItem("appPassword");
      if (storedPassword) {
        try {
          const response = await axios.post(
            "https://firstautoeg.com/api/verify-password/",
            { password: storedPassword }
          );
          if (response.data.success) {
            router.push("/(tabs)"); // Navigate to the Tabs layout
          }
        } catch (error) {
          console.error("Error verifying stored password:", error);
        }
      }
    };

    verifyStoredPassword();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter App Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <Pressable onPress={checkPassword} disabled={loading} style={styles.btn}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {loading ? "Loading..." : "Submit"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: "80%",
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  btn: {
    width: 200,
    height: 50,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PasswordScreen;
