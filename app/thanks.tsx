import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import GlobalStyles from "@/components/GlobalStyles";
import { AntDesign } from "@expo/vector-icons";

const thanks = () => {
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

        <Text style={{ fontSize: 29, fontWeight: "bold" }}>
          شكراً تم استلام طلبك بنجاح!{" "}
        </Text>

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
    backgroundColor: "#1E3F93",
    borderColor: "#1E3F93",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});

export default thanks;
