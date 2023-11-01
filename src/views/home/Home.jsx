import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
