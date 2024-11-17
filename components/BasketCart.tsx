import { CartProduct } from "@/constants/types";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "@/redux/features/cartSlice";
import { Minus, PlusIcon, Trash } from "lucide-react-native";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";

type BasketItemT = {
  imageUrl: string;
  title: string;
  price: number;
  discount: number;
  id: number;
  count: number;
};

const BasketCart = ({ item }: { item: CartProduct }): JSX.Element => {
  const { name, image, quantity, price } = item;
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increaseQuantity(item));
  };

  const decrease = () => {
    dispatch(decreaseQuantity(item));
  };

  const remove = () => {
    dispatch(removeItem(item));
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingHorizontal: 24,
        paddingVertical: 12,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <Image
          style={{ width: 80, height: 80, marginRight: 16 }}
          source={{ uri: item.image }}
        />
        <View
          style={{ display: "flex", flex: 1, flexDirection: "column", gap: 4 }}
        >
          <Text
            numberOfLines={1}
            style={{ fontSize: 16, fontWeight: "medium" }}
            ellipsizeMode="tail"
          >
            {item.name}
          </Text>

          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginTop: 15,
              }}
            >
              price : {price}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 10,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 100,
        }}
      >
        {quantity === 1 ? (
          <Pressable
            style={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={remove}
          >
            <Trash size={25} color={"blue"} strokeWidth={2.2} />
          </Pressable>
        ) : (
          <Pressable
            style={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={decrease}
          >
            <Minus size={35} color={"blue"} strokeWidth={2.2} />
          </Pressable>
        )}
        <Text style={{ fontWeight: "medium", fontSize: 24 }}>{quantity}</Text>
        <Pressable
          style={{
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={increase}
        >
          <PlusIcon size={35} color={"blue"} strokeWidth={2.2} />
        </Pressable>
      </View>
    </View>
  );
};

export default BasketCart;
