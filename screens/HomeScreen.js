import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Home = ({ navigation }) => {
  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login");
    } catch (err) {}
  };

  return (
    <View style={styles.container}>
      <Text>User: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={signOutUser}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
