import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import GlobalStyles from "@/components/GlobalStyles";
import { Link } from "expo-router";
const users = [
  {
    img: require("@/assets/images/icons/oil-filter.png"),
    name: "فلاتر الزيت",
    slug: "oil-filter",
  },
  {
    img: require("@/assets/images/icons/wind.png"),
    name: "فلاتر الهواء",
    slug: "air-filter",
  },
  {
    img: require("@/assets/images/icons/fuel.png"),
    name: "فلاتر المقصورة",
    slug: "fuel-filter",
  },
  {
    img: require("@/assets/images/icons/gas-filter.png"),
    name: "فلاتر الوقود",
    slug: "gas-filter",
  },
];

export default function Example() {
  const [input, setInput] = useState("");
  const filteredRows = useMemo(() => {
    const rows = [];
    const query = input.toLowerCase();

    for (const item of users) {
      const nameIndex = item.name.toLowerCase().search(query);

      if (nameIndex !== -1) {
        rows.push({
          ...item,
          index: nameIndex,
        });
      }
    }

    return rows.sort((a, b) => a.index - b.index);
  }, [input]);

  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
      <View style={styles.container}>
        {/* Search section */}
        {/* <View style={styles.searchWrapper}>
          <View style={styles.search}>
            <View style={styles.searchIcon}>
              <Feather color="#848484" name="search" size={17} />
            </View>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={(val) => setInput(val)}
              placeholder="Start typing.."
              placeholderTextColor="#848484"
              returnKeyType="done"
              style={styles.searchControl}
              value={input}
            />
          </View>
        </View> */}

        <ScrollView contentContainerStyle={styles.searchContent}>
          {filteredRows.length ? (
            filteredRows.map(({ img, name, slug }, index) => {
              return (
                <View key={index} style={styles.cardWrapper}>
                  <Link href={`/(tabs)/category/${slug}`} asChild>
                    <TouchableOpacity>
                      <View style={styles.card}>
                        {img ? (
                          <Image
                            alt={name}
                            resizeMode="cover"
                            source={img}
                            style={styles.cardImg}
                          />
                        ) : (
                          <View style={[styles.cardImg, styles.cardAvatar]}>
                            <Text style={styles.cardAvatarText}>{name[0]}</Text>
                          </View>
                        )}

                        <View style={styles.cardBody}>
                          <Text style={styles.cardTitle}>{name}</Text>
                        </View>

                        <View style={styles.cardAction}>
                          <Feather
                            color="#9ca3af"
                            name="chevron-right"
                            size={22}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </Link>
                </View>
              );
            })
          ) : (
            <Text style={styles.searchEmpty}>No results</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Search */
  search: {
    position: "relative",
    backgroundColor: "#efefef",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  searchWrapper: {
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: "#efefef",
  },
  searchIcon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 34,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  searchControl: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    paddingLeft: 34,
    width: "100%",
    fontSize: 16,
    fontWeight: "500",
  },
  searchContent: {
    paddingTop: 20,
    paddingLeft: 24,
  },
  searchEmpty: {
    textAlign: "center",
    paddingTop: 16,
    fontWeight: "500",
    fontSize: 15,
    color: "#9ca1ac",
  },
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: "#d6d6d6",
  },
  cardImg: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },
  cardAvatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9ca1ac",
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#fff",
  },
  cardBody: {
    marginRight: "auto",
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  cardPhone: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "500",
    color: "#616d79",
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },
});
