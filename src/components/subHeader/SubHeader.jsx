import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Button, Icon } from "@rneui/themed";

const SubHeader = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.leftConteiner}>
        <Text style={styles.text}>Calorias</Text>
      </View>
      <View style={styles.rightConteiner}>
        <Button
          icon={<Icon name="add-circle-outline" color="#FFF" />}
          radius="lg"
          color="#4ecb71"
        ></Button>
      </View>
    </View>
  );
};

export default SubHeader;
const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "row",
    alignContent: "center",
    marginVertical: 24,
  },
  leftConteiner: {
    flex: 1,
    justifyContent: "center",
  },
  rightConteiner: {
    flex: 1,
    alignItems: "flex-end",
  },
  text: {
    fontSize: 20,
  },
});
