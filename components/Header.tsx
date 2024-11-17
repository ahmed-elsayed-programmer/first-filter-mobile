import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
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
