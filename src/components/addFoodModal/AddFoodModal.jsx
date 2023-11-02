import React from "react";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const AddFoodModal = () => {
  return (
    <Modal>
      <View style={styles.conteiner}>
        <View style={styles.content}></View>
      </View>
    </Modal>
  );
};

export default AddFoodModal;

const styles = StyleSheet.create({
  conteiner: {},
  content: {},
});
