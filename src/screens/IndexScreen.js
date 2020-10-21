import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
