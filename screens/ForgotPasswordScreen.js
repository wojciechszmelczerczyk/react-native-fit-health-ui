import { StyleSheet } from "react-native";
import React, { useRef } from "react";
import LoginScreen from "react-native-login-screen";
import { resetPassword } from "../services/UserService";
import { auth } from "../firebase";

const ForgotPasswordScreen = () => {
  const email = useRef(null);

  const resetPass = async () => {
    try {
      const res = await resetPassword(auth, email.current);
      console.log(res)
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <LoginScreen
      onLoginPress={resetPass}
      onEmailChange={(mail) => (email.current = mail)}
      loginButtonText='Reset password'
      emailPlaceholder='Provide your email'
      disableSocialButtons
      disablePasswordInput
      disableSignup
    ></LoginScreen>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
