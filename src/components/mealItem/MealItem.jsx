import { Button, Icon } from "@rneui/themed";
import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import UseFoodStorage from "../hooks/UseFoodStorage";

const MealItem = ({
  uuid,
  calories,
  name,
  portion,
  isAbleToAdd,
  onCompleteAddRemoveFood,
  loadFoods,
}) => {
  const { onSaveTodayFood, removeTodayFood, deleteAddFood } = UseFoodStorage();

  const handleIconPress = async () => {
    try {
      if (isAbleToAdd) {
        await onSaveTodayFood({ uuid, calories, name, portion });
        Alert.alert("Comida agregada al dia");
      } else {
        //!para cerrar
        await removeTodayFood(uuid);
        Alert.alert("Comida removida");
        onCompleteAddRemoveFood();
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Comida no agregada");
    }
  };

  const handleDeleteItem = async () => {
    await deleteAddFood(uuid);
    Alert.alert("Dieta removida");
    loadFoods(); // volvemos a cargar los datos
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.portion}>{portion} g</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.iconos}>
          <Button
            icon={<Icon name={isAbleToAdd ? "add-circle-outline" : "delete"} />}
            type="clear"
            style={styles.iconButton}
            onPress={handleIconPress}
          />
          <Button
            icon={<Icon name={isAbleToAdd ? "delete" : ""} />}
            type="clear"
            style={styles.iconButton}
            onPress={handleDeleteItem}
          />
        </View>
        <Text style={styles.calories}>{calories} cal</Text>
      </View>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ade8af",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  iconos: {
    flexDirection: "row",

    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  portion: {
    fontSize: 15,
    paddingTop: 5,
    color: "#808080",
    fontWeight: "500",
  },
  calories: {
    fontSize: 15,
    paddingRight: 18,
  },
  iconButton: {
    marginBottom: -8,
  },
});
