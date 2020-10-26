import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const postID = navigation.getParam("id");
  const { state } = useContext(Context);
  console.log(postID);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  console.log(state);
  console.log(blogPost);

  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
