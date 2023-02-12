import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { DayNameContext } from "../context/DayNameContext";
import { DayNumberContext } from "../context/DayNumberContext";

const UserScreen = ({ navigation }) => {
  const [, setDayName] = useContext(DayNameContext);
  const [, setDayNumber] = useContext(DayNumberContext);

  const signOutUser = async () => {
    try {
      await signOut(auth);

      // set default date time
      // =========================================================
      const data = new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const name = data.split(" ")[0];

      const number = !data.split(" ")[2]
        ? data.split(" ")[3]
        : data.split(" ")[2];

      setDayName(name);
      setDayNumber(number);
      // =========================================================

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
