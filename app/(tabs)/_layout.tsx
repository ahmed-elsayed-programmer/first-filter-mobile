import TabBar from "@/components/TabBar";
import { useAppSelector } from "@/redux/hooks";
import { Redirect, router, Tabs } from "expo-router";
import React from "react";
import { ActivityIndicator } from "react-native";

export default function TabLayout() {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Redirect href={"/login"} />;
  }

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "الرئيسية",
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "الاقسام",
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.push("/(tabs)/category");
          },
        }}
      />

      <Tabs.Screen
        name="product"
        options={{
          title: "البحث",
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.push("/(tabs)/product");
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "السلة",
        }}
      />
    </Tabs>
  );
}
