import React from "react";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { getAnswer } from "../services/ChatbotService";
import LoginScreen from "react-native-login-screen";

const ChatbotScreen = () => {
  const handleInput = async () => {
    const res = await getAnswer(prompt.current);
  };

  const prompt = useRef(null);

  return (
    <View>
      <LoginScreen
        loginButtonStyle={{ backgroundColor: "#6432ff" }}
        onLoginPress={handleInput}
        disableDivider
        disableSocialButtons
        onPasswordChange={(value) => (prompt.current = value)}
        style={{ backgroundColor: "#fff" }}
      />
    </View>
  );
};

export default ChatbotScreen;

const styles = StyleSheet.create({});
