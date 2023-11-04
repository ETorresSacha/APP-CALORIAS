import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import MealItem from "../mealItem/MealItem";

const TodayMeals = ({ foods }) => {
  return (
    <View style={StyleSheet.container}>
      <Text style={styles.title}>Comidas</Text>
      <ScrollView style={styles.content}>
        {foods?.map((meal, index) => (
          <MealItem key={`today-meal-item-${meal.name}-${index}`} {...meal} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TodayMeals;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  title: {
    fontSize: 16,
  },
  content: {
    marginVertical: 16,
  },
});
