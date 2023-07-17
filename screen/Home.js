import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import { StatusBar } from "expo-status-bar";
import CategoryList from "../Components/CategoryList";
import Restaurants from "../Components/Restaurants";

const Home = () => {
  return (
    <>
      <Header />
      <StatusBar style="auto" />
      <View style={{ flex: 0.2 }}>
        <CategoryList />
      </View>
      <View style={{ flex: 0.8 }}>
        <Restaurants />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
