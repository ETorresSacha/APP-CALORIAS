import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
const user = {
  name: "Erik Torres Sacha",
  uri: "https://www.cesurformacion.com/uploads/media/16-9-large/02/2302-que-es-la-imagen-personal.png?v=1-0",
};
const Header = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.leftConteiner}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.subtitle}>Bienvenido</Text>
      </View>
      <View style={styles.rightConteiner}>
        <Image source={{ uri: user.uri }} style={styles.profileImage}></Image>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "row",
  },
  leftConteiner: {
    flex: 1,
    justifyContent: "center",
  },
  rightConteiner: {
    flex: 1,
    alignItems: "flex-end",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "#808080",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 24,
  },
});
