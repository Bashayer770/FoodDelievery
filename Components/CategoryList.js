import { StyleSheet, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";
import { ScrollView } from "native-base";

const CategoryList = () => {
  const data = [
    {
      image:
        "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
      Category: "Burger",
    },
    {
      image:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg?resize=1200:*",
      Category: "Pizza",
    },
    {
      image:
        "https://www.thesun.co.uk/wp-content/uploads/2022/03/crop-18099015.jpg?w=1280&quality=44",
      Category: "Chicken",
    },
    {
      image:
        "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
      Category: "Burger",
    },
    {
      image:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg?resize=1200:*",
      Category: "Pizza",
    },
    {
      image:
        "https://www.thesun.co.uk/wp-content/uploads/2022/03/crop-18099015.jpg?w=1280&quality=44",
      Category: "Chicken",
    },
    {
      image:
        "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
      Category: "Burger",
    },
    {
      image:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg?resize=1200:*",
      Category: "Pizza",
    },
    {
      image:
        "https://www.thesun.co.uk/wp-content/uploads/2022/03/crop-18099015.jpg?w=1280&quality=44",
      Category: "Chicken",
    },
  ];
  const categoryList = data.map((category, index) => {
    return (
      <CategoryCard
        key={index}
        image={category.image}
        category={category.Category}
        onPress={() => {}}
      />
    );
  });
  return (
    <ScrollView style={{ flex: 0.2 }} horizontal={true}>
      {categoryList}
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
