import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";

const thanks = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          display: "flex",
          flex: 1,
          gap: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign name="checkcircleo" size={40} color="green" />

        <Text style={{ fontSize: 29, textAlign: "center", fontWeight: "bold" }}>
          هل انت متاكد انك تريد حذف الايميل!{" "}
        </Text>
        <Text style={{ textAlign: "center", padding: 10 }}>
          سوف يتم اغلاق الحساب في غضون ٧ ايام عمل! اذا فتحت الحساب خلال ١٥ يوم
          سوف يتم الغاء الطلب
        </Text>

        <Pressable onPress={handleLogout}>
          <View style={styles.btnDelete}>
            <Text style={styles.btnText}>موافق</Text>
          </View>
        </Pressable>
        <Link href={"/(tabs)"}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>الصفحه الرئيسيه</Text>
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    width: 200,
    backgroundColor: "#1E3F93",
    borderColor: "#1E3F93",
  },
  btnDelete: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    width: 200,
    backgroundColor: "#FF0000",
    borderColor: "#FF0000",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});

export default thanks;
