import React from "react";
import { View, Text, Stylesheet } from "react-native";

const EditScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Edit Screen</Text>
      <Text>{navigation.getParam("id")}</Text>
    </View>
  );
};

export default EditScreen;
