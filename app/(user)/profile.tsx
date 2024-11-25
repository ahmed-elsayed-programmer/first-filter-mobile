import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { logout } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link, Redirect, useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const { data, isLoading } = useRetrieveUserQuery();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  if (!isAuthenticated) {
    return <Redirect href={"/login"} />;
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: "https://www.bootdey.com/image/900x400/FF0000/FF0000" }}
        style={styles.coverImage}
      />
      <View style={styles.avatarContainer}>
        <Image
          source={require("@/assets/images/login.png")}
          style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>name:</Text>
          <Text style={styles.infoValue}>
            {data?.first_name} {data?.last_name}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{data?.email}</Text>
        </View>
        <Link href={"/(tabs)"} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <Link href={"/(user)/deleteAccount"} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Delete Profile</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  coverImage: {
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
  },
  content: {
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoValue: {
    marginTop: 5,
  },
  button: {
    backgroundColor: "#0066cc",
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default ProfileScreen;
