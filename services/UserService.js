import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const signUpUser = async (auth, email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

const signInUser = async (auth, email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

const resetPassword = async (auth, email) =>
  await sendPasswordResetEmail(auth, email);

export { signUpUser, signInUser, resetPassword };
