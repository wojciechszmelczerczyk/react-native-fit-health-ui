import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import SliderElement from "./SliderElement";

const WaterIntakeView = () => {
  const screenWidth = Dimensions.get("window").width;
  const [value, setValue] = useState(0);

  return (
    <View
      style={{
        display: "flex",
        backgroundColor: "white",
        height: 175,
        width: screenWidth - 25,
        marginTop: 15,
        borderRadius: 20,
      }}
    >
      <View style={{ flexGrow: 1, alignItems: "center", marginTop: 30 }}>
        <Image
          style={{ height: 70, width: 40 }}
          source={require("../assets/dishes/waterBottle.png")}
        />
        <Text style={{ color: "#8BBEE8FF", fontSize: 20 }}>{value}</Text>
      </View>
      <SliderElement value={value} setValue={setValue} />
    </View>
  );
};

export default WaterIntakeView;

const styles = StyleSheet.create({});
