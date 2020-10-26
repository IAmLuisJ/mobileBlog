import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.title}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(e) => setTitle(e)}
        style={styles.textInput}
      />
      <Text style={styles.title}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={(e) => setContent(e)}
        style={styles.textInput}
      />
      <Button
        title="Add Blog post"
        onPress={() => addBlogPost(title, content)}
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

export default CreateScreen;
