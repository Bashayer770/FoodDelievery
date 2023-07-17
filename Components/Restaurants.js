import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "native-base";
import RestaurantCard from "./RestaurantCard";
import { useNavigation } from "@react-navigation/native";

export default function Restaurants() {
  const navigation = useNavigation();
  const restaurants = [
    {
      image:
        "https://yt3.googleusercontent.com/ytc/AOPolaSOjYJxRcqYR-opWB-9zyTqS-KY3BlDj0gO1bCe2w=s900-c-k-c0x00ffffff-no-rj",
      name: "McDonald's",
      menu: [
        {
          name: "chicken nuggets",
          price: 1.5,
          image:
            "https://yt3.googleusercontent.com/ytc/AOPolaSOjYJxRcqYR-opWB-9zyTqS-KY3BlDj0gO1bCe2w=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "chicken nuggets",
          price: 2.5,
          image:
            "https://yt3.googleusercontent.com/ytc/AOPolaSOjYJxRcqYR-opWB-9zyTqS-KY3BlDj0gO1bCe2w=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "chicken nuggets",
          price: 3.5,
          image:
            "https://yt3.googleusercontent.com/ytc/AOPolaSOjYJxRcqYR-opWB-9zyTqS-KY3BlDj0gO1bCe2w=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "chicken nuggets",
          price: 1.5,
          image:
            "https://yt3.googleusercontent.com/ytc/AOPolaSOjYJxRcqYR-opWB-9zyTqS-KY3BlDj0gO1bCe2w=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "chicken nuggets",
          price: 3.5,
          image:
            "https://yt3.googleusercontent.com/ytc/AOPolaSOjYJxRcqYR-opWB-9zyTqS-KY3BlDj0gO1bCe2w=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "chicken nuggets",
          price: 1.5,
          image:
            "https://yt3.googleusercontent.com/ytc/AOPolaSOjYJxRcqYR-opWB-9zyTqS-KY3BlDj0gO1bCe2w=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "chicken nuggets",
          price: 2.5,
          image:
            "https://yt3.googleusercontent.com/ytc/AOPolaSOjYJxRcqYR-opWB-9zyTqS-KY3BlDj0gO1bCe2w=s900-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      image:
        "https://www.kuwaityello.com/img/kw/f/1659372976-91-burger-king.png",
      name: "Burger King",
      menu: [
        {
          name: "Burger",
          image:
            "https://www.kuwaityello.com/img/kw/f/1659372976-91-burger-king.png",
        },
        {
          name: "Chicken Royal",
          image:
            "https://www.kuwaityello.com/img/kw/f/1659372976-91-burger-king.png",
        },
        {
          name: "Whopper",
          image:
            "https://www.kuwaityello.com/img/kw/f/1659372976-91-burger-king.png",
        },
      ],
    },
    {
      image:
        "https://i.pinimg.com/originals/78/41/03/784103c92c3bf47554be3b3d7a6369ef.jpg",
      name: "Shake Shack",
    },
    {
      image:
        "https://images.deliveryhero.io/image/talabat/restaurants/Screen_Shot_2021-10-_637782738366619048.png?width=300",
      name: "Lucky Bun",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/2048px-KFC_logo.svg.png",
      name: "KFC",
    },
    {
      image: "https://logowik.com/content/uploads/images/130_pizzahut.jpg",
      name: "Pizza Hut",
    },
    {
      image:
        "https://shopsquareone.com/wp-content/uploads/2021/09/35920863f8f3b0cfe798866012ca1bca7d3f926c.png",
      name: "Taco Bell",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PWMWAmTrm3Ygp8D4D_YX6sVFq1mH0xXx-xb9CsIs2DRL3VaXt3dsXQiM3QAcrm4qTSQ&usqp=CAU",
      name: "Hardees",
    },
  ];

  const restaurantsList = restaurants.map((restaurant, index) => {
    return (
      <RestaurantCard
        category={restaurant.name}
        image={restaurant.image}
        key={index}
        onPress={() => {
          navigation.navigate("Menu", { restaurant });
        }}
      />
    );
  });

  return <ScrollView>{restaurantsList}</ScrollView>;
}

const styles = StyleSheet.create({});
