import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TrainingView = ({ space, navigation }: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("TrainingDetails")}>
      <View style={{ ...styles.exerciseChild, top: space * 10 }}>
        <MaterialCommunityIcons
          style={{ left: "12%", top: "20%" }}
          name='dumbbell'
          color='#D7A9E3FF'
          size={35}
        />
        <Text style={{ left: "10%", top: "30%", fontWeight: "500" }}>
          Workout
        </Text>
        <Text
          style={{
            left: "65%",
            top: "-30%",
            fontWeight: "500",
            fontSize: 25,
          }}
        >
          30
          <Text style={{ fontWeight: "300", fontSize: 15 }}> minutes</Text>
        </Text>
        <View
          style={{
            left: "55%",
            top: "-15%",
            height: 35,
            width: 135,
            backgroundColor: "#D7A9E3FF",
            borderRadius: 30,
            opacity: 0.5,
          }}
        >
          <Text
            style={{ color: "#D742E3", alignSelf: "center", lineHeight: 30 }}
          >
            Today 8:00 PM
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TrainingView;

const styles = StyleSheet.create({
  exerciseChild: {
    width: 350,
    height: 130,
    backgroundColor: "white",
    borderRadius: 25,
  },
});
