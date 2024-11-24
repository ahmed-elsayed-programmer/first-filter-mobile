import GlobalStyles from "@/components/GlobalStyles";
import { OrderItem } from "@/constants/types";
import UseRegister from "@/hooks/useRegister";
import { clearCard } from "@/redux/features/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/orderApiSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useToast } from "react-native-toast-notifications";

export default function SignUp() {
  const toast = useToast();

  const {
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
  } = UseRegister();

  const handleSubmit = () => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (first_name.length < 3 || last_name.length < 3) {
      toast.show(" ادخل الاسم بشكل صحيح");
    }
    if (!email.match(regexEmail)) {
      toast.show(" ادخل الايميل بشكل صحيح");
    }
    if (password !== re_password || password.length < 8) {
      toast.show("ادخل الباسورد بشكل صحيح");
    }
    onSubmit();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>تسجيل حساب جديد</Text>

          <Text style={styles.subtitle}></Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>الاسم الاول</Text>

            <TextInput
              clearButtonMode="while-editing"
              placeholder=""
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={first_name}
              onChangeText={setFirstname}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>اسم العائلة</Text>

            <TextInput
              clearButtonMode="while-editing"
              placeholder=""
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={last_name}
              onChangeText={setLasttname}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>الايميل</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              placeholder="name@email.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>الباسورد</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              secureTextEntry
              blurOnSubmit={false}
              placeholder="******"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>تاكيد الباسورد</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              secureTextEntry
              placeholder="*******"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={re_password}
              onChangeText={setRePassword}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleSubmit} disabled={isLoading}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>
                  {isLoading ? "Loading ...." : "تسجيل"}
                </Text>
              </View>
            </TouchableOpacity>

            <Text style={{ marginTop: 30, width: "100%", textAlign: "center" }}>
              عندك حساب ؟{"   "}
              <Link
                href={"/login"}
                style={{ color: "red", fontWeight: "bold" }}
              >
                سجل الدخول
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: "700",
    textAlign: "right",
    color: "#1D2A32",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
  },
  /** Header */
  header: {
    marginBottom: 24,
    paddingHorizontal: 24,
  },

  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    textAlign: "right",
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    textAlign: "right",
    borderWidth: 1,
    borderColor: "#C9D3DB",
    borderStyle: "solid",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#075eec",
    borderColor: "#075eec",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});
