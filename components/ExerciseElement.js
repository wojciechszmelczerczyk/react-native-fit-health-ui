import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ExerciseElement = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: 175,
        width: 165,
        marginRight: 15,
        borderRadius: 20,
      }}
    >
      <Text>Exercise</Text>
    </View>
  );
};

export default ExerciseElement;

const styles = StyleSheet.create({});
