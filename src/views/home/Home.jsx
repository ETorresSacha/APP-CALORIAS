import React, { useCallback, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../components/header/Header";
import SubHeader from "../../components/subHeader/SubHeader";
import { useFocusEffect } from "@react-navigation/native";
import UseFoodStorage from "../../components/hooks/UseFoodStorage";

const Home = () => {
  const [todayFood, setTodayFood] = useState([]);
  const { onGetTodayFood } = UseFoodStorage();

  const loadTodayFood = useCallback(async () => {
    try {
      const todayFoodResponse = await onGetTodayFood();
      setTodayFood(todayFoodResponse);
    } catch (error) {
      setTodayFood([]);
      console.error(error);
    }
  }, []);

  // useFocusEffect(() => {
  //   loadTodayFood().catch(null);
  // }, []);

  useFocusEffect(
    useCallback(() => {
      // Your code here
      loadTodayFood().catch(null);
    }, [loadTodayFood])
  );
  console.log(todayFood);
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
