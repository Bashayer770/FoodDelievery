import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./Components/Header";
import CategoryList from "./Components/CategoryList";
import Restaurants from "./Components/Restaurants";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./Navigation";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  screen: {},
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
