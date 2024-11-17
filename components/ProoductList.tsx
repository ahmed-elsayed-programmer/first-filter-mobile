import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import ProductCard from "@/components/productCard";
import { useRetrieveProductsQuery } from "@/redux/features/productApiSlice";
import { Product } from "@/constants/types";

interface PropTypes {
  title: string;
  products: Product[] | undefined;
  scroll: boolean;
}

const ProductList = ({ title, products, scroll }: PropTypes) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={products}
        numColumns={2}
        scrollEnabled={scroll}
        renderItem={({ item, index }) => <ProductCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default ProductList;
