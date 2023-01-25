import React from "react";
import LoginScreen, { SocialButton } from "react-native-login-screen";
import { StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";

export default function Login({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <LoginScreen
        logoImageSource={require("../assets/logo.png")}
        onLoginPress={() => navigation.navigate("Home")}
        onSignupPress={() => {}}
        onEmailChange={(email) => {}}
        onPasswordChange={(password) => {}}
        style={{backgroundColor:"#fff"}}
      >
        <SocialButton
          text='Continue with Google'
          style={styles.socialButton}
          imageSource={require("../assets/social/google.png")}
          onPress={() => {}}
        />
        <SocialButton
          text='Continue with Facebook'
          style={styles.socialButton}
          onPress={() => {}}
        />
        <SocialButton
          text='Continue with Apple'
          imageSource={require("../assets/social/apple.png")}
          style={styles.socialButton}
          onPress={() => {}}
        />
        <SocialButton
          text='Continue with Discord'
          imageSource={require("../assets/social/discord.png")}
          style={styles.socialButton}
          onPress={() => {}}
        />
      </LoginScreen>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  socialButton: {
    marginBottom: 10,
  },
});
