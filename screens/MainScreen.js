import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

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
      {/* <View style={{ flexGrow: 2, justifyContent:"center" }}> */}
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
            marginTop: 45,
            marginLeft: 45,
          }}
        >
          <Text style={{ color: "white" }}>Entry Level</Text>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            alignItems: "center",
            marginLeft: 50,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white" }}>Chest press</Text>
        </View>
        <Image
          style={{ position: "absolute", top: -70 }}
          source={require("../assets/exercises/press.png")}
        />
      </View>
    </View>
    // </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
