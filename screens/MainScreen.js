import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ExerciseView from "../components/ExerciseView";

const MainScreen = () => {
  const [user] = useContext(UserContext);

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
      {/* <ScrollView horizontal={true}> */}
        <ExerciseView />
      {/* </ScrollView> */}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
