import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { useSerachProductsQuery } from "@/redux/features/productApiSlice";
import ProductCard from "@/components/productCard";
import { Stack } from "expo-router";
import GlobalStyles from "@/components/GlobalStyles";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: products,
    isLoading,
    error,
  } = useSerachProductsQuery(searchQuery);

  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
      <View style={{ padding: 10 }}>
        <SearchBar text={searchQuery} onchange={setSearchQuery} />
        {isLoading && <Text>جاري التحميل...</Text>}
        {error && <Text>حدث خطأ ما!</Text>}
        <View style={styles.container}>
          <FlatList
            numColumns={2}
            data={products} // Display the fetched categories
            renderItem={({ item }) => <ProductCard item={item} />}
            ListEmptyComponent={() => (
              <Text style={styles.noResults}>لا توجد نتائج</Text>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 18,
    textAlign: "right",
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginBottom: 10,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  categoryText: {
    fontSize: 18,
    textAlign: "right",
  },
  noResults: {
    fontSize: 18,
    textAlign: "center",
    color: "#888",
  },
});

export default Products;
