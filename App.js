import React, { useState } from "react";
import LoginScreen, { SocialButton } from "react-native-login-screen";

import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <LoginScreen
      logoImageSource={require("./assets/logo.png")}
      onLoginPress={() => {}}
      onSignupPress={() => {}}
      onEmailChange={(email) => {}}
      onPasswordChange={(password) => {}}
      style={styles.container}
    >
      <SocialButton
        text='Continue with Google'
        style={styles.socialButton}
        imageSource={require("./assets/social/google.png")}
        onPress={() => {}}
      />
      <SocialButton
        text='Continue with Facebook'
        style={styles.socialButton}
        onPress={() => {}}
      />
      <SocialButton
        text='Continue with Apple'
        imageSource={require("./assets/social/apple.png")}
        style={styles.socialButton}
        onPress={() => {}}
      />
      <SocialButton
        text='Continue with Discord'
        imageSource={require("./assets/social/discord.png")}
        style={styles.socialButton}
        onPress={() => {}}
      />
    </LoginScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  socialButton: {
    marginBottom: 10,
  },
});
