import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const postID = navigation.getParam("id");
  const blogPost = state.find((item) => item.id === navigation.getParam("id"));
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Edit Screen</Text>
      <Text>{navigation.getParam("id")}</Text>
      <Text style={styles.title}>Enter Title:</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onTextInput={(e) => setTitle(e)}
      />
      <Text style={styles.title}>Enter Content:</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onTextInput={(e) => setContent(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 5,
  },
  textInput: {
    fontSize: 18,
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
  },
});

export default EditScreen;
