import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { Button, Icon, Input } from "@rneui/themed";
import Header from "../../components/header/Header";
import AddFoodModal from "../../components/addFoodModal/AddFoodModal";
import UseFoodStorage from "../../components/hooks/UseFoodStorage";

const AddFood = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [foods, setFoods] = useState([]);
  const { onGetFood } = UseFoodStorage();

  const loadFoods = async () => {
    // Trae los datos guardados del local storage
    try {
      const foodsResponse = await onGetFood();
      setFoods(foodsResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalClose = async (shouldUpdate) => {
    if (shouldUpdate) {
      Alert.alert("Comida guardada exitosamente");
      loadFoods();
    }
    setIsVisible(false);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.addFoodContainer}>
        <View style={styles.containerTextAddFood}>
          <Text style={styles.textAddFood}>Add Food</Text>
        </View>
        <View>
          <Button
            icon={<Icon name="add-circle-outline" color="#FFF" />}
            radius="lg"
            color="#4ecb71"
            style={styles.btn}
            onPress={() => setIsVisible(true)}
          ></Button>
        </View>
      </View>
      <View style={styles.addFoodContainer}>
        <View style={styles.containerTextAddFood}>
          <Input placeholder="apples, banana, etc" />
        </View>
        <View>
          <Button
            title="search"
            radius="lg"
            color="#ade8af"
            titleStyle={styles.btnSearch}
          />
        </View>
      </View>
      <AddFoodModal visible={isVisible} onClose={handleModalClose} />
    </View>
  );
};

export default AddFood;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  addFoodContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignItems: "flex",
    marginVertical: 24,
  },
  containerTextAddFood: {
    flex: 1,
    justifyContent: "center",
  },
  textAddFood: {
    fontSize: 17,
    fontWeight: "bold",
  },
  btn: {
    alignItems: "flex-end",
    width: "2px",
  },
  btnSearch: {
    color: "#000",
    fontSize: 14,
  },
});
