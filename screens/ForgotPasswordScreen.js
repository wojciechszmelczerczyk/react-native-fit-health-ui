import {
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useRef } from "react";
import LoginScreen from "react-native-login-screen";
import { resetPassword } from "../services/UserService";
import { auth } from "../firebase";

const ForgotPasswordScreen = () => {
  const email = useRef(null);
  const error = useRef(null);

  const config = {
    deviceWidth: Dimensions.get("window").width,
    deviceHeight: Dimensions.get("window").height,
  };

  const resetPass = async () => {
    try {
      await resetPassword(auth, email.current);
      Alert.alert(`Password reset email send to ${email.current}`);
    } catch (err) {
      error.current = err.code;
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View
        style={{ alignItems: "center", paddingTop: config.deviceHeight * 0.05 }}
      >
        <Text style={{ color: "#6432ff", fontSize: 25 }}>
          Forgot your password?
        </Text>
        <Text
          style={{
            textAlign: "center",
            paddingLeft: config.deviceWidth * 0.03,
            width: config.deviceWidth * 0.9,
            paddingTop: config.deviceHeight * 0.03,
          }}
        >
          Provide your email address below and we will send you password reset
          instruction.
        </Text>
      </View>
      {error.current ? <Text>{error.current}</Text> : ""}
      <LoginScreen
        style={{ backgroundColor: "#fff" }}
        onLoginPress={resetPass}
        onEmailChange={(mail) => {
          error.current = null;
          email.current = mail;
        }}
        loginButtonStyle={{ backgroundColor: "#6432ff" }}
        loginButtonText='Reset password'
        emailPlaceholder='Enter your email'
        disableSocialButtons
        disablePasswordInput
        disableSignup
      ></LoginScreen>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
