import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantCard from "../Components/RestaurantCard";
import { ScrollView } from "native-base";

const Menu = ({ route }) => {
  const { restaurant } = route.params;

  const menuList = restaurant?.menu?.map((item, index) => {
    console.log(item);
    return (
      <RestaurantCard
        category={item.name}
        image={item.image}
        key={index}
        onPress={() => {}}
      />
    );
  });
  return <ScrollView>{menuList}</ScrollView>;
};

export default Menu;

const styles = StyleSheet.create({});
