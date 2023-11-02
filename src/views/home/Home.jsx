import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../components/header/Header";
import SubHeader from "../../components/subHeader/SubHeader";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SubHeader />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});
