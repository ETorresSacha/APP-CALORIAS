import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../views/home/Home";
import AddFood from "../views/addFood/AddFood";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer style={{ backgroundColor: "blue" }}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddCalorias" component={AddFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
