import React, { useEffect, useRef } from "react";
import Slider from "react-native-smooth-slider";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

const SliderElement = () => {
  const value = useRef(1);

  return (
    <View style={styles.container}>
      <Slider
        value={value.current}
        useNativeDriver={true}
        minimumValue={0}
        maximumValue={10}
        disabled={false}
        minimumTrackTintColor='#8BBEE8FF'
        TrackTintColor='#8BBEE8FF'
        thumbTintColor='#8BBEE8FF'
        onValueChange={(val: any) => (value.current = val)}
      />
      <Text>{value.current}</Text>
    </View>
  );
};

// AppRegistry.registerComponent("SliderElement", () => SliderElement);

export default SliderElement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 100,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
