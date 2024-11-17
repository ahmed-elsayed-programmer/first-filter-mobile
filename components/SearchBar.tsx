import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ text, onchange }: { text: string; onchange: any }) => {
  return (
    <View style={styles.search}>
      <Ionicons name="search" size={25} color="gray" />
      <TextInput
        placeholder="بحث في المنتجات"
        value={text}
        onChangeText={onchange}
        style={{ textAlign: "right", minWidth: "80%", height: 48 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-evenly",
    columnGap: 10,
    backgroundColor: "#f6f6f6",
    borderRadius: 150,
    borderWidth: 1,
    borderColor: "#A0153E",
    overflow: "hidden",
  },
});

export default SearchBar;
