import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform } from "react-native";
import Routes from "./src/routes/Routes";

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
