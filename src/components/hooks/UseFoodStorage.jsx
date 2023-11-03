import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MY_FOOD_KID = "@MyFood:Key";

const UseFoodStorage = () => {
  const handleSaveFood = async ({ calories, name, portion }) => {
    try {
      const currentSavedFood = await AsyncStorage.getItem(MY_FOOD_KID); // Trae todos los datos guardados en el local storage

      // Si es diferente a null, quiere decir que existen datos guardados
      if (currentSavedFood !== null) {
        const currentSaveFoodParsed = JSON.parse(currentSavedFood); // Convierte los datos a JSON y agrega los nuevos datos
        currentSaveFoodParsed.push({
          calories,
          name,
          portion,
        });

        // Convierte los datos en formato texto y lo guarda
        await AsyncStorage.setItem(
          MY_FOOD_KID,
          JSON.stringify(currentSaveFoodParsed)
        );
        return Promise.resolve();
      }

      // Si "currentSavedFood" es null, se guarda
      await AsyncStorage.setItem(
        MY_FOOD_KID,
        JSON.stringify([
          {
            calories,
            name,
            portion,
          },
        ])
      );

      return Promise.resolve();
    } catch (error) {
      return Promise.resolve(error);
    }
  };

  const handleGetFoods = async () => {
    try {
      const foods = await AsyncStorage.getItem(MY_FOOD_KID); // Trae los datos guardados para despues transformarlo en formato JSON

      if (foods !== null) {
        const parsedFoods = JSON.parse(foods);
        return Promise.resolve(parsedFoods);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };
  return { onSaveFood: handleSaveFood, onGetFood: handleGetFoods };
};

// Guardar informacion de comida
// Metodo para obtener info de comida

export default UseFoodStorage;
