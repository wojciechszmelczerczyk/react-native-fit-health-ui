import React, { useRef, useEffect } from "react";
import LoginScreen, { SocialButton } from "react-native-login-screen";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import { auth } from "../firebase";
import { signUpUser } from "../services/UserService";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithCredential,
} from "firebase/auth";

// expo auth solution
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";

export default function Register({ navigation }: any) {
  const email = useRef(null) as any;
  const password = useRef(null) as any;

  // google auth
  const [request, response, googlePrompt] = Google.useIdTokenAuthRequest({
    expoClientId: process.env.GOOGLE_AUTH_CLIENT_ID,
  } as any);

  // facebook auth
  const [req, res, fbPrompt] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    expoClientId: process.env.FACEBOOK_AUTH_CLIENT_ID,
  } as any);

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
  }, [response, res]);

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
          disabled={!request}
          style={styles.socialButton}
          imageSource={require("../assets/social/google.png")}
          onPress={() => {
            googlePrompt;
          }}
        />
        <SocialButton
          text='Continue with Facebook'
          disabled={!req}
          style={styles.socialButton}
          onPress={() => {
            fbPrompt;
          }}
        />
        {Platform.OS === "ios" ? (
          <SocialButton
            text='Continue with Apple'
            imageSource={require("../assets/social/apple.png")}
            style={styles.socialButton}
            onPress={() => {}}
          />
        ) : (
          ""
        )}
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
