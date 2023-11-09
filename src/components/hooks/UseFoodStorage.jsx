import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isToday } from "date-fns";

const MY_FOOD_KEY = "@MyFood:Key";
const MY_TODAY_FOOD_KEY = "@MyTodayFood:Key";

const UseFoodStorage = () => {
  // GUARDAR INFORMACION
  const saveInfoToStorage = async (storageKey, meal) => {
    try {
      const currentSavedFood = await AsyncStorage.getItem(storageKey); // Trae todos los datos guardados en el local storage

      // Si es diferente a null, quiere decir que existen datos guardados
      if (currentSavedFood !== null) {
        const currentSaveFoodParsed = JSON.parse(currentSavedFood); // Convierte los datos a JSON y agrega los nuevos datos
        currentSaveFoodParsed.push(meal);

        // Convierte los datos en formato texto y lo guarda
        await AsyncStorage.setItem(
          storageKey,
          JSON.stringify(currentSaveFoodParsed)
        );
        return Promise.resolve();
      }

      // Si "currentSavedFood" es null, se guarda
      await AsyncStorage.setItem(storageKey, JSON.stringify([meal]));

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  //TODO--> METODOS PARA AGREGAR DIETAS (ADDFOOD)

  //! POST
  const handleSaveFood = async ({ uuid, calories, name, portion }) => {
    try {
      const result = await saveInfoToStorage(MY_FOOD_KEY, {
        uuid,
        calories,
        name,
        portion,
      });
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  //! GET
  const handleGetFoods = async () => {
    try {
      const foods = await AsyncStorage.getItem(MY_FOOD_KEY); // Trae los datos guardados para despues transformarlo en formato JSON

      if (foods !== null) {
        const parsedFoods = JSON.parse(foods);
        return Promise.resolve(parsedFoods);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  //! DELETE
  const handleDeleteAddFood = async (uuid) => {
    try {
      const addFood = await handleGetFoods();

      const filterItem = addFood?.filter((element) => {
        return element.uuid !== uuid;
      });
      await AsyncStorage.setItem(MY_FOOD_KEY, JSON.stringify(filterItem));

      return Promise.resolve();
    } catch (error) {
      return console.error(error);
    }
  };

  //TODO--> METODOS PARA AGREGAR LAS DIETAS AL DIA DE HOY (HOME)

  //! POST
  const handleSaveTodayFood = async ({ uuid, calories, name, portion }) => {
    try {
      const result = await saveInfoToStorage(MY_TODAY_FOOD_KEY, {
        uuid,
        calories,
        name,
        portion,
        date: new Date().toISOString(),
      });
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  //! GET
  const handleGetTodayFoods = async () => {
    try {
      const foods = await AsyncStorage.getItem(MY_TODAY_FOOD_KEY); // Trae los datos guardados para despues transformarlo en formato JSON

      if (foods !== null) {
        const parsedFoods = JSON.parse(foods);
        return Promise.resolve(
          parsedFoods.filter(
            (meal) => meal.date && isToday(new Date(meal.date))
          )
        );
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  //! DELETE
  const handleRemoveTodayFood = async (uuid) => {
    try {
      const todayFood = await handleGetTodayFoods();

      const filterItem = todayFood?.filter((element) => {
        return element.uuid !== uuid;
      });
      await AsyncStorage.setItem(MY_TODAY_FOOD_KEY, JSON.stringify(filterItem));

      return Promise.resolve();
    } catch (error) {
      return console.error(error);
    }
  };

  return {
    onSaveFood: handleSaveFood,
    onGetFood: handleGetFoods,
    deleteAddFood: handleDeleteAddFood,
    onSaveTodayFood: handleSaveTodayFood,
    onGetTodayFood: handleGetTodayFoods,
    removeTodayFood: handleRemoveTodayFood,
  };
};

export default UseFoodStorage;
