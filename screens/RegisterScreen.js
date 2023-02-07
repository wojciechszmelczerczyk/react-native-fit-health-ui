import React, { useRef } from "react";
import LoginScreen, { SocialButton } from "react-native-login-screen";
import { Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { auth } from "../firebase";
import { signUpUser } from "../services/UserService";

export default function Register({ navigation }) {
  const email = useRef(null);
  const password = useRef(null);

  const signUp = async () => {
    try {
      const res = await signUpUser(auth, email.current, password.current);
      if (res.user) navigation.navigate("Login");
    } catch (err) {}
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <LoginScreen
        logoImageSource={require("../assets/logo.png")}
        loginButtonStyle={{ backgroundColor: "#6432ff" }}
        onLoginPress={signUp}
        onSignupPress={() => {
          navigation.navigate("Login");
        }}
        signupText='You already sign in? Login'
        loginButtonText='Sign Up'
        onEmailChange={(mail) => (email.current = mail)}
        onPasswordChange={(pass) => (password.current = pass)}
        style={{ backgroundColor: "#fff" }}
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
        <TouchableOpacity
          style={{ alignSelf: "flex-start" }}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={{ color: "blue" }}>Forgotten your password?</Text>
        </TouchableOpacity>
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
