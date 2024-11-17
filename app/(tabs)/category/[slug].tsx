import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useCategoryProductsListQuery } from "@/redux/features/categoryApiSlice";
import { useLocalSearchParams } from "expo-router";
import ProductList from "@/components/ProoductList";
import GlobalStyles from "@/components/GlobalStyles";

const ItemList = () => {
  const { slug } = useLocalSearchParams();

  const { data, isLoading } = useCategoryProductsListQuery(slug);
  if (isLoading) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
      <ProductList products={data} title={slug} />
    </SafeAreaView>
  );
};

export default ItemList;
