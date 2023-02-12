import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const DishDetailsScreen = ({ route, navigation }) => {
  const { value } = route.params;

  return (
    <View>
      <Text>DishDetailsScreen</Text>
      <Text>{value}</Text>
      <TouchableOpacity
        style={{ backgroundColor: "red" }}
        onPress={() => navigation.goBack()}
      >
        <Text>sss</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DishDetailsScreen;

const styles = StyleSheet.create({});
