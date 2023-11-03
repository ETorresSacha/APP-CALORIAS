import { Button, Icon } from "@rneui/themed";
import React from "react";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const MealItem = ({ calories, name, portion }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.portion}>{portion}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Button
          icon={<Icon name="add-circle-outline" />}
          type="clear"
          style={styles.iconButton}
        />
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
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  portion: {
    fontSize: 13,
    color: "#808080",
    fontWeight: "500",
  },
  calories: {
    fontSize: 15,
  },
  iconButton: {
    marginBottom: -8,
  },
});
