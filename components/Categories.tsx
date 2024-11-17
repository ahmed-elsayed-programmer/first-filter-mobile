import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useCategoryListQuery } from "@/redux/features/categoryApiSlice";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Categories = () => {
  const categories = [
    {
      id: "1",
      slug: "oil-filter",
      name: "فلاتر الزيت",
      icon: <FontAwesome name="tint" size={35} color="#FF6347" />,
    }, // Oil filter
    {
      id: "2",
      slug: "air-filter",
      name: "فلاتر الهواء",
      icon: <Entypo name="air" size={35} color="#1E90FF" />,
    }, // Air filter
    {
      id: "3",
      slug: "gas-filter",
      name: "فلاتر الوقود",
      icon: <FontAwesome name="filter" size={35} color="#FFD700" />,
    }, // Fuel filter
    {
      id: "4",
      slug: "fuel-filter",
      name: "فلاتر المقصورة",
      icon: (
        <MaterialCommunityIcons name="air-filter" size={35} color="#32CD32" />
      ),
    }, // Cabin filter
  ];
  const { data, isLoading } = useCategoryListQuery();

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>الاقسام</Text>
      <FlatList
        data={categories}
        horizontal
        contentContainerStyle={{
          display: "flex",
          width: "100%",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 20,
        }}
        renderItem={({ item, index }) => (
          <Link
            href={`/category/${item.slug}`}
            style={styles.imageLink}
            asChild
          >
            <TouchableOpacity>
              {item.icon}
              <Text style={{ fontSize: 12, marginTop: 4, textAlign: "center" }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "right",
    fontWeight: "bold",
  },
  imageLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    padding: 1,
    height: 80,
    borderRadius: 20,
  },
  catImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});

export default Categories;
