import React, { useRef, useEffect } from "react";
import LoginScreen, { SocialButton } from "react-native-login-screen";
import { StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../firebase";
import { signInUser } from "../services/UserService";
import { onAuthStateChanged } from "firebase/auth";

export default function Login({ navigation }) {
  const email = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = async () => {
    try {
      const res = await signInUser(auth, email.current, password.current);
      if (res.user) navigation.navigate("Home");
    } catch (err) {}
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <LoginScreen
        logoImageSource={require("../assets/logo.png")}
        onLoginPress={signIn}
        onSignupPress={() => {
          navigation.navigate("Register");
        }}
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
