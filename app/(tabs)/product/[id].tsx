import {
  View,
  Text,
  Image,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useRetrieveProductQuery } from "@/redux/features/productApiSlice";
import GlobalStyles from "@/components/GlobalStyles";
import { useAppDispatch } from "@/redux/hooks";
import { useToast } from "react-native-toast-notifications";
import { addToCart } from "@/redux/features/cartSlice";

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { id } = useLocalSearchParams();
  const { data: product, isLoading, isError } = useRetrieveProductQuery(id);

  const addItem = () => {
    dispatch(addToCart(product));

    toast.show("تم اضافه المنتج الي السلة", {
      type: "success",
    });
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>There is no product</Text>;
  }
  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
      {/* <Stack.Screen options={{ title: "product name" }} /> */}
      <ScrollView>
        <Image
          source={{
            uri: product?.image,
          }}
          style={{ width: "100%", aspectRatio: 1, objectFit: "contain" }}
        />
        <View style={{ padding: 20, display: "flex", gap: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "semibold" }}>
            {product?.name}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Price : {product?.price}{" "}
          </Text>
          <Text>{product?.decription}</Text>
        </View>
        <View
          style={{
            display: "flex",
            borderTopWidth: 2,
            borderColor: "gray",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <Pressable onPress={addItem} style={styles.container}>
            <Text style={styles.text}>اضافة الي السلة</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(0, 205, 0)",
    padding: 15,
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default ProductDetails;
