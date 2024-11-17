import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 90,
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
});
