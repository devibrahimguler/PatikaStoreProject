import React from "react";
import {View, SafeAreaView, FlatList, StyleSheet,Text} from "react-native";
import ProductCard from "./components/ProductCard";
import HeaderCard from "./components/HeaderCard";

import product_data from "./product.json";


const App = () => {

  const renderProduct = ({item}) => <ProductCard product={item} />;
  const keyProduct = (item , index) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HeaderCard/>
        <FlatList
        style={styles.flat_container}
        numColumns={2}
        keyExtractor = {keyProduct}
        data = {product_data}
        renderItem = {renderProduct}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
  },
  flat_container: {
    marginBottom: 100
  },
});

export default App;