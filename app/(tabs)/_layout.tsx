import TabBar from "@/components/TabBar";
import { router, Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
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
