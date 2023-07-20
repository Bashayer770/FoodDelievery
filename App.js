import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./Components/Header";
import CategoryList from "./Components/CategoryList";
import Restaurants from "./Components/Restaurants";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./Navigation";
import { useState } from "react";

export default function App() {
  const queryClient = new QueryClient();
  const [user, setUser] = useState(false);

  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      setUser(true);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <NativeBaseProvider>
          <RootNavigation />
        </NativeBaseProvider>
      </NavigationContainer>
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
