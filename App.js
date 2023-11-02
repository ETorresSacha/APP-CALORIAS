import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Routes from "./src/routes/Routes";
import Prueba from "./src/routes/Prueba";

export default function App() {
  return (
 
        <Routes style={{
          paddingTop: Platform.OS === "android" && 30,
        }}>
          <StatusBar style="auto" />
        </Routes>

  );
}

const styles = StyleSheet.create({
  container: {},
});
