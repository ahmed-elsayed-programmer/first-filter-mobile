import Categories from "@/components/Categories";
import GlobalStyles from "@/components/GlobalStyles";
import Header from "@/components/Header";
import ProductList from "@/components/ProoductList";
import Slider from "@/components/Slider";
import { useRetrieveProductsQuery } from "@/redux/features/productApiSlice";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  const { data: products, isLoading } = useRetrieveProductsQuery();
  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
      <ScrollView>
        <Header />
        <Slider sliderList={["hello", "hi", "hello"]} />
        <Categories />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ProductList
            title="الاكثر مبيعا"
            products={products}
            scroll={false}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
