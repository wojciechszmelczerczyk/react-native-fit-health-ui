import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const getPredictions = async () => {
    const response = await axios.post("http://localhost:3000/", { imageUrl });

    console.log(response);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: "gray",
          borderWidth: 1,
        }}
        onChange={(val) => setImageUrl(val.nativeEvent.text)}
      />
      <TouchableHighlight onPress={getPredictions}>
        <Text>Press this button to submit editing</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
