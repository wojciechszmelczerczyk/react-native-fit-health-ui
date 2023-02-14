import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ExerciseView from "../components/ExerciseView";
import ExerciseElement from "../components/ExerciseElement";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const MainScreen = () => {
  const [user] = useContext(UserContext);

  const x = [1, 2, 3];

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          alignSelf: "flex-start",
        }}
      >
        <Text
          style={{
            color: "gray",
            marginLeft: 10,
            marginTop: 20,
            fontSize: 15,
          }}
        >
          Hi {user.displayName || user.email},
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 50,
            fontSize: 20,
            alignSelf: "flex-start",
          }}
        >
          {"Get ready to work!"}
        </Text>
      </View>
      <ExerciseView />
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 30 }}>
          <Text
            style={{
              fontSize: 20,
              alignSelf: "flex-start",
            }}
          >
            Popular Exercises
          </Text>
          <View
            style={{
              backgroundColor: "#8BBEE8FF",
              borderRadius: 20,
              height: 35,
              width: 90,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>View All</Text>
          </View>
        </View>
        <SwiperFlatList
          style={{
            marginTop: -35,
            width: 350,
            overflow: "hidden",
          }}
          data={x}
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          renderItem={({ item }) => <ExerciseElement item={item} />}
        />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
