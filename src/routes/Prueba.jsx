import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../views/home/Home";
const Homer = () => {
  return (
    <View>
      <Text>estas en el homer</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const Prueba = () => {
  return (
    <View>
      <Text>hola</Text>
      <Home />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Homer} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Prueba;
