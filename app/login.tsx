import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("@/assets/images/bg-login.jpg")}
        style={styles.bg}
      />
      <View style={styles.loginBox}>
        <Text style={styles.title}>مرحبا بك</Text>
        <Text style={styles.label}>الايميل</Text>
        <TextInput style={styles.input} autoCapitalize="none" />

        <Text style={styles.label}>كلمة السر</Text>
        <TextInput
          style={styles.input}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
        />

        <Pressable style={styles.btn} onPress={() => console.log("Login")}>
          <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
            تسجيل الدخول
          </Text>
        </Pressable>
        <Text style={{ marginTop: 30, width: "100%", textAlign: "center" }}>
          ليس لديك حساب ؟{"   "}
          <Link href={"/(tabs)/"} style={{ color: "red", fontWeight: "bold" }}>
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
