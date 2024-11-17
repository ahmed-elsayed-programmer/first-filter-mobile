import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

interface PropType {
  sliderList: string[];
}

const Slider = ({ sliderList }: PropType) => {
  const imageurl =
    "https://img.freepik.com/free-photo/different-car-accessories-composition_23-2149030435.jpg?size=626&ext=jpg&ga=GA1.1.19254987.1725187555&semt=ais_hybrid";
  return (
    <View style={styles.container}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View>
            <Image source={{ uri: imageurl }} style={styles.imageSlider} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  imageSlider: {
    height: 200,
    width: 330,
    marginHorizontal: 10,
    objectFit: "cover",
    borderRadius: 20,
  },
});

export default Slider;
