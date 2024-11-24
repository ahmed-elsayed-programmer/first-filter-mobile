import UseVerify from "@/hooks/useVerify";
import { useAppSelector } from "@/redux/hooks";
import Provider from "@/redux/provider";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { ToastProvider } from "react-native-toast-notifications";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ToastProvider
      placement="top"
      normalColor="blue"
      successIcon={<AntDesign name="checkcircle" size={24} color="black" />}
      dangerIcon={<AntDesign name="closecircle" size={24} color="black" />}
      warningIcon={
        <AntDesign name="exclamationcircle" size={24} color="black" />
      }
    >
      <Provider>
        <Slot />
      </Provider>
    </ToastProvider>
  );
}

export const Layout = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  UseVerify();

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen
          name="(tabs)"
          options={{ title: "Home ", headerShown: false }}
        />
      )}
    </NavigationContainer>
  );
};
