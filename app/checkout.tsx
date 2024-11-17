import GlobalStyles from "@/components/GlobalStyles";
import { OrderItem } from "@/constants/types";
import { clearCard } from "@/redux/features/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/orderApiSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useToast } from "react-native-toast-notifications";

export default function Checkout() {
  const toast = useToast();

  const router = useRouter();

  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [createOrder, { isLoading, isError, isSuccess }] =
    useCreateOrderMutation();
  const [form, setForm] = useState({
    user_name: "",
    address: "",
    city: "",
    phone: "",
  });

  let items: OrderItem[] = cart.map(({ id, price, quantity }) => {
    return { product: id, price, quantity };
  });

  const checkout = () => {
    createOrder({ ...form, items })
      .unwrap()
      .then((res) => {
        dispatch(clearCard());
        router.push("/thanks");
        setForm({ user_name: "", address: "", city: "", phone: "" });
        toast.show("تم تسجيل الطلب بنجاح", { type: "success" });
      })
      .catch((error) => {
        toast.show("ادخل جميع البيانات بشكل صحيح", { type: "danger" });
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>عنوان الشحن</Text>

          <Text style={styles.subtitle}></Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>الاسم كامل</Text>

            <TextInput
              clearButtonMode="while-editing"
              onChangeText={(user_name) => setForm({ ...form, user_name })}
              placeholder="John Doe"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.user_name}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>رقم الموبايل</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="numeric"
              onChangeText={(phone) => setForm({ ...form, phone })}
              placeholder="012XXXXXXX"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.phone}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>المدينة</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={(city) => setForm({ ...form, city })}
              placeholder="المدينة"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.city}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>العنوان</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={(address) => setForm({ ...form, address })}
              placeholder="العنوان"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.address}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={checkout} disabled={isLoading}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>
                  {isLoading ? "Loading ...." : "اطلب الان"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: "700",
    textAlign: "right",
    color: "#1D2A32",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
  },
  /** Header */
  header: {
    marginBottom: 24,
    paddingHorizontal: 24,
  },

  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    textAlign: "right",
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    textAlign: "right",
    borderWidth: 1,
    borderColor: "#C9D3DB",
    borderStyle: "solid",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#075eec",
    borderColor: "#075eec",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});
