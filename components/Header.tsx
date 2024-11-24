import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";
import { useRouter } from "expo-router";

const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/(auth)/login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Pressable onPress={handleLogout}>
          <Image
            source={require("@/assets/images/login.png")}
            style={styles.userImage}
          />
        </Pressable>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            اهلا بك
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {/* Ahmed Elsayed */}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  userContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});

export default Header;
