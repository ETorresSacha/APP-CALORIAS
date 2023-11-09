import React from "react";
import { View, StyleSheet } from "react-native";
import MealItem from "../mealItem/MealItem";

const TodayMeals = ({ foods, onCompleteAddRemoveFood }) => {
  return (
    <View style={StyleSheet.container}>
      {foods.map((meal, index) => (
        <MealItem
          key={`today-meal-item-${meal.name}-${index}`}
          {...meal}
          onCompleteAddRemoveFood={onCompleteAddRemoveFood}
        />
      ))}
    </View>
  );
};

export default TodayMeals;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
});
