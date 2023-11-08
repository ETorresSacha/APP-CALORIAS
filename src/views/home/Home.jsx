import React, { useCallback, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../components/header/Header";
import SubHeader from "../../components/subHeader/SubHeader";
import { useFocusEffect } from "@react-navigation/native";
import UseFoodStorage from "../../components/hooks/UseFoodStorage";
import TodayCalories from "../../components/todayCalories/TodayCalories";
import TodayMeals from "../../components/todayMeals/TodayMeals";

const totalCaloriesPerDay = 2000;

const Home = () => {
  const [todayFood, setTodayFood] = useState([]);

  const [todayStatistics, setTodayStatistics] = useState({
    total: totalCaloriesPerDay,
    consumed: 0,
    remaining: 0,
    percentage: 0,
  });

  const { onGetTodayFood } = UseFoodStorage();

  // Calculos de las estadisticas
  const calculateTodayStatistics = (meals) => {
    try {
      const caloriesConsumed = meals.reduce(
        (acum, curr) => acum + Number(curr.calories),
        0
      );
      const remainingCalories = totalCaloriesPerDay - caloriesConsumed;
      const percentage = (caloriesConsumed / totalCaloriesPerDay) * 100;

      setTodayStatistics({
        consumed: caloriesConsumed,
        percentage,
        remaining: remainingCalories,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const loadTodayFood = useCallback(async () => {
    try {
      const todayFoodResponse = await onGetTodayFood();
      console.log(todayFoodResponse);

      calculateTodayStatistics(todayFoodResponse);
      setTodayFood(todayFoodResponse);
    } catch (error) {
      setTodayFood([]);
      console.error(error);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTodayFood().catch(null);
    }, [loadTodayFood])
  );

  //console.log(todayFood);
  return (
    <View style={styles.container}>
      <Header />
      <SubHeader />
      <TodayCalories {...todayStatistics} />
      <TodayMeals foods={todayFood} />
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
