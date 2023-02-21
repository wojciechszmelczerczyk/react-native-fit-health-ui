import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import SliderElement from "./SliderElement";

const WaterIntakeView = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        backgroundColor: "white",
        height: 175,
        width: screenWidth - 25,
        marginTop: 15,
        borderRadius: 20,
      }}
    >
      <SliderElement />
    </View>
  );
};

export default WaterIntakeView;

const styles = StyleSheet.create({});
