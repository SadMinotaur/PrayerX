import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
