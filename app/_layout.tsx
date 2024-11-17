import Provider from "@/redux/provider";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
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
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="(tabs)"
            options={{ title: "Home ", headerShown: false }}
          />
          <Stack.Screen name="thanks" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </ToastProvider>
  );
}
