import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

const TodayCalories = ({ total, consumed, remaining, percentage }) => {
  console.log(total);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <CircularProgress value={percentage} valueSuffix="%" />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.today}>Hoy</Text>
        <View style={styles.rightItem}>
          <Text style={styles.rightItemLegend}>Total</Text>
          <Text style={styles.rightItemValue}>{total}</Text>
        </View>
        <View style={styles.rightItem}>
          <Text style={styles.rightItemLegend}>Consumido</Text>
          <Text style={styles.rightItemValue}>{consumed}</Text>
        </View>
        <View style={styles.rightItem}>
          <Text style={styles.rightItemLegend}>Falta</Text>
          <Text style={styles.rightItemValue}>{remaining}</Text>
        </View>
      </View>
    </View>
  );
};

export default TodayCalories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rightItem: {
    flexDirection: "row",
    marginBottom: 8,
  },
  today: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 14,
  },
  rightItemLegend: {
    flex: 1,
  },
  rightItemValue: {
    flex: 1,
    textAlign: "right",
  },
});
