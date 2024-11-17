import { useAppSelector } from "@/redux/hooks";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function TabBar({ state, descriptors, navigation }: any) {
  const { totalQuantity } = useAppSelector((state) => state.cart);
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const color = isFocused ? "red" : "#222";
        const icons = {
          index: <AntDesign name="home" size={24} color={color} />,
          category: <AntDesign name="find" size={24} color={color} />,
          product: <AntDesign name="search1" size={24} color={color} />,
          cart: <AntDesign name="shoppingcart" size={24} color={color} />,
        };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            {route.name === "cart" && totalQuantity > 0 && (
              <View
                style={{
                  position: "absolute",
                  top: -9,
                  left: "50%",
                  backgroundColor: "red",
                  padding: 3,
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 150,
                  zIndex: 1,
                }}
              >
                <Text style={{ fontSize: 12, color: "white" }}>
                  {totalQuantity}
                </Text>
              </View>
            )}
            {icons[route.name]}
            <Text style={{ color, fontSize: 11 }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 24,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 25,
    borderCurve: "continuous",
    backgroundColor: "white",
    shadowColor: "red",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});

export default TabBar;
