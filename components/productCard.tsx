import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { Product } from "@/constants/types";
import { useToast } from "react-native-toast-notifications";
import { AntDesign } from "@expo/vector-icons";

interface PropType {
  item: Product;
}

const ProductCard = ({ item }: PropType) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const addItem = () => {
    dispatch(addToCart(item));

    toast.show("تم اضافه المنتج الي السلة", {
      type: "success",
    });
  };
  return (
    <Link href={`/product/${item.slug}`} asChild>
      <Pressable style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.prodcutImage} />
        <View>
          <Text style={styles.productTag}>{item.category.name}</Text>
          <Text style={styles.productName} numberOfLines={1}>
            {item.name}
          </Text>
          <Pressable style={styles.btn} onPress={addItem}>
            <Text
              style={{
                color: "white",
                fontWeight: "semibold",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              اضف الي السله
            </Text>
          </Pressable>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1 / 2,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    width: 140,
    borderColor: "#FF204E",
    borderRadius: 10,
  },
  prodcutImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    objectFit: "contain",
  },
  productTag: {
    fontSize: 10,
    textAlign: "center",
    backgroundColor: "#FFCAD4",
    width: "70%",
    padding: 3,
    borderRadius: 100,
    marginTop: 5,
  },
  productName: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  btn: {
    marginTop: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(0, 205, 0)",
  },
});

export default ProductCard;
