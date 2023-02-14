import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import EntypoCommunityIcons from "react-native-vector-icons/Entypo";

const ExerciseView = () => {
  return (
    <View
      style={{
        backgroundColor: "#8BBEE8FF",
        borderRadius: 20,
        flexBasis: 225,
        width: 350,
        alignItems: "flex-end",
      }}
    >
      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: 20,
          height: 40,
          width: 100,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
          marginLeft: 45,
        }}
      >
        <Text style={{ color: "white" }}>Entry Level</Text>
      </View>
      <View
        style={{
          alignSelf: "flex-start",
          alignItems: "center",
          marginLeft: 5,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Chest press</Text>
        <Text style={{ color: "white" }}>15 workout videos for you</Text>
        {/* play button and exercise time subsection */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            maxHeight: 70,
            alignItems: "center",
          }}
        >
          {/* play button */}
          <View
            style={{
              marginRight: 15,
              height: 40,
              width: 40,
              backgroundColor: "white",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EntypoCommunityIcons
              name={"controller-play"}
              size={25}
              color={"#8BBEE8FF"}
            />
          </View>
          {/* exercise time text */}
          <Text style={{ color: "white" }}>50 Minutes</Text>
        </View>
      </View>
      <Image
        style={{ position: "absolute", top: -70 }}
        source={require("../assets/exercises/press.png")}
      />
    </View>
  );
};

export default ExerciseView;

const styles = StyleSheet.create({});
