import React, { useRef, useEffect, useState } from "react";
import LoginScreen, { SocialButton } from "react-native-login-screen";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { auth } from "../firebase";
import { signInUser } from "../services/UserService";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithCredential,
} from "firebase/auth";

// expo auth solution
import { ResponseType } from "expo-auth-session";
import { useIdTokenAuthRequest } from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";

export default function Login({ navigation }) {
  const email = useRef(null);
  const password = useRef(null);

  // google auth
  const [request, response, promptAsync] = useIdTokenAuthRequest({
    clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
  });

  // facebook auth
  const [req, res, promptAsyncc] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: process.env.FACEBOOK_AUTH_CLIENT_ID,
  });

  useEffect(() => {
    // Sign in with Google
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }

    // Sign in with Facebook
    if (res?.type === "success") {
      const { access_token } = res.params;
      const credential = FacebookAuthProvider.credential(access_token);
      signInWithCredential(auth, credential);
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, [response]);

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
        loginButtonStyle={{ backgroundColor: "#6432ff" }}
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
          disabled={!request}
          imageSource={require("../assets/social/google.png")}
          style={styles.socialButton}
          onPress={() => {
            promptAsync();
          }}
        />
        <SocialButton
          text='Continue with Facebook'
          disabled={!req}
          style={styles.socialButton}
          onPress={() => {
            promptAsyncc();
          }}
        />
        <SocialButton
          text='Continue with Apple'
          imageSource={require("../assets/social/apple.png")}
          style={styles.socialButton}
          onPress={() => {}}
        />
        <SocialButton
          text='Continue with GitHub'
          imageSource={require("../assets/social/github.png")}
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
