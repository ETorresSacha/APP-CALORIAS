import { Button, Icon, Input } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import UseFoodStorage from "../hooks/UseFoodStorage";

const AddFoodModal = ({ onClose, visible }) => {
  const [calories, setCalories] = useState("");
  const [name, setName] = useState("");
  const [portion, setPortion] = useState("");
  const { onSaveFood } = UseFoodStorage();

  useEffect(() => {
    setCalories("");
    setName("");
    setPortion("");
  }, [visible]);

  const handleAddPress = async () => {
    try {
      await onSaveFood({
        calories,
        name,
        portion,
      });
      onClose(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={() => onClose()}
      transparent
      animationType="slide"
    >
      <View style={styles.conteiner}>
        <View style={styles.content}>
          <View style={styles.closeContainer}>
            <Button
              icon={<Icon name="close" size={28} />}
              onPress={() => onClose()}
              type="clear"
            />
          </View>
          <View style={styles.formItem}>
            <View style={styles.inputContainer}>
              <Input
                value={calories}
                onChangeText={(text) => setCalories(text)}
              />
            </View>
            <View style={styles.legendContainer}>
              <Text style={styles.legend}>Kcal</Text>
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.inputContainer}>
              <Input value={name} onChangeText={(text) => setName(text)} />
            </View>
            <View style={styles.legendContainer}>
              <Text style={styles.legend}>Nombre</Text>
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.inputContainer}>
              <Input
                value={portion}
                onChangeText={(text) => setPortion(text)}
              />
            </View>
            <View style={styles.legendContainer}>
              <Text style={styles.legend}>Porción</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Add"
              icon={<Icon name="add" color="#FFF" />}
              radius="lg"
              color="#4ecb71"
              onPress={handleAddPress}
              disabled={
                calories.trim() === "" ||
                name.trim() === "" ||
                portion.trim() === ""
              }
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddFoodModal;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    width: "75%",
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeContainer: {
    alignItems: "flex-end",
  },
  formItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flex: 2,
  },
  legendContainer: {
    flex: 1,
  },
  legend: {
    fontWeight: "500",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});
