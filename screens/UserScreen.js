import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const UserScreen = ({navigation}) => {
  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login");
    } catch (err) {}
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={signOutUser}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
