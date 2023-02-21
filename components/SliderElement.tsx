import React from "react";
import Slider from "@react-native-community/slider";
import { StyleSheet, Text, View } from "react-native";

const SliderElement = ({ value, setValue }: any) => {
  return (
    <View style={styles.container}>
      <Slider
        value={value}
        minimumValue={0}
        maximumValue={10}
        step={1}
        minimumTrackTintColor='#8BBEE8FF'
        thumbTintColor='#8BBEE8FF'
        onValueChange={(val: any) => setValue(val)}
      />
    </View>
  );
};

export default SliderElement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 6,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
