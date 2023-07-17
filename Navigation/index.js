import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import Menu from "../screen/Menu";

export default function RootNavigation() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="Menu" component={Menu} />
    </Navigator>
  );
}

const styles = StyleSheet.create({});
