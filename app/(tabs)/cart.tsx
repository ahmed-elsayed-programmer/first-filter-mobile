import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Plus, UserRoundPlus, X } from "lucide-react-native";

import Button from "@/components/Button";
import BasketCart from "@/components/BasketCart";
import GlobalStyles from "@/components/GlobalStyles";
import { useAppSelector } from "@/redux/hooks";
import { router } from "expo-router";

type BasketItemT = {
  imageUrl: string;
  title: string;
  price: number;
  discount: number;
  id: number;
  count: number;
};

const defaulBasketItems: BasketItemT[] = [
  {
    imageUrl:
      "https://wplfghcfxvqjycvqtewh.supabase.co/storage/v1/object/public/assets/screens/cart/oil.png",
    title: "Olive Oil",
    price: 9.99,
    discount: 10,
    id: 1,
    count: 2,
  },
  {
    imageUrl:
      "https://wplfghcfxvqjycvqtewh.supabase.co/storage/v1/object/public/assets/screens/cart/yogurt.png",
    title: "Nicks Strawberry Swirl Light Ice Cream with Avocados",
    price: 5.49,
    discount: 5,
    id: 2,
    count: 1,
  },
  {
    imageUrl:
      "https://wplfghcfxvqjycvqtewh.supabase.co/storage/v1/object/public/assets/screens/cart/banana.png",
    title: "Organic Bananas with plastic",
    price: 1.29,
    discount: 0,
    id: 3,
    count: 6,
  },
  {
    imageUrl:
      "https://wplfghcfxvqjycvqtewh.supabase.co/storage/v1/object/public/assets/screens/cart/food.png",
    title: "Nicks Strawbar Swirl Light Ice Cream",
    price: 1.29,
    discount: 0,
    id: 4,
    count: 6,
  },
  {
    imageUrl:
      "https://wplfghcfxvqjycvqtewh.supabase.co/storage/v1/object/public/assets/screens/cart/oil.png",
    title: "Olive Oil",
    price: 9.99,
    discount: 10,
    id: 5,
    count: 2,
  },
  {
    imageUrl:
      "https://wplfghcfxvqjycvqtewh.supabase.co/storage/v1/object/public/assets/screens/cart/yogurt.png",
    title: "Nicks Strawberry Swirl Light Ice Cream with Avocados",
    price: 5.49,
    discount: 5,
    id: 6,
    count: 1,
  },
  {
    imageUrl:
      "https://wplfghcfxvqjycvqtewh.supabase.co/storage/v1/object/public/assets/screens/cart/banana.png",
    title: "Organic Bananas with plastic",
    price: 1.29,
    discount: 0,
    id: 7,
    count: 6,
  },
  {
    imageUrl:
      "https://wplfghcfxvqjycvqtewh.supabase.co/storage/v1/object/public/assets/screens/cart/food.png",
    title: "Nicks Strawbar Swirl Light Ice Cream",
    price: 1.29,
    discount: 0,
    id: 8,
    count: 6,
  },
];

const Cart1 = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { cart, totalQuantity, totalAmount } = useAppSelector(
    (state) => state.cart
  );

  if (totalQuantity == 0 && totalAmount == 0) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          عربة التسوق فارغة
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={[GlobalStyles.safeAreaView, { paddingBottom: bottom }]}
    >
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <X strokeWidth={2.5} />
        </View>
        <View style={styles.headerIcon}>
          <UserRoundPlus size={24} strokeWidth={2.5} />
        </View>
      </View>
      <FlatList
        data={cart}
        ListHeaderComponent={() => (
          <Text style={styles.titleHeader}>المنتجات</Text>
        )}
        renderItem={({ item }) => <BasketCart item={item} />}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={() => (
          <View style={{ width: "100%", height: 1, backgroundColor: "gray" }} />
        )}
      />
      <View
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          borderTopWidth: 2,
          borderColor: "gray",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <View style={{ display: "flex", gap: 10, padding: 16 }}>
          <Text
            style={{
              textAlign: "right",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            اجمالي السعر : {totalAmount} جنيه
          </Text>
          <Text
            style={{ fontSize: 14, textAlign: "right", fontWeight: "bold" }}
          >
            عدد المنتجات : {totalQuantity}
          </Text>
        </View>
        <Button
          text="متابعة لتاكيد الطلب"
          onPress={() => {
            router.push("/checkout");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    marginBottom: 100,
  },
  header: {
    display: "none",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    marginTop: 4,
  },
  headerIcon: {
    width: 20,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  icon: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: "semibold",
    textAlign: "right",
    marginRight: 8,
    paddingTop: 8,
    paddingBottom: 5,
  },

  listFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "rgb(250, 50, 50)",
    padding: 8,
    alignSelf: "flex-end",
    marginRight: 16,
    marginBottom: 16,
    borderRadius: 100,
    gap: 5,
  },
});

export default Cart1;
