import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TrainingDetailsScreen = ({ route, navigation }) => {
  // const { value } = route.params;

  return (
    <View>
      <Text>TrainingDetailsScreen</Text>
      {/* <Text>{value}</Text> */}
      <TouchableOpacity
        style={{ backgroundColor: "red" }}
        onPress={() => navigation.goBack()}
      >
        <Text>sss</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrainingDetailsScreen;

const styles = StyleSheet.create({});
