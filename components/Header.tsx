import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Header = () => {
  return (
    <View style={styles.container}>
      <Link href={"/(user)/profile"} asChild>
        <Pressable style={styles.userContainer}>
          <Image
            source={require("@/assets/images/login.png")}
            style={styles.userImage}
          />
          <View>
            <Text
              style={{
                fontSize: 20,
                marginTop: 20,
                fontWeight: "bold",
                textAlign: "right",
              }}
            >
              الملف الشخصي
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {/* Ahmed Elsayed */}
            </Text>
          </View>
        </Pressable>
      </Link>
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
