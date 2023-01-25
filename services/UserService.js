import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const signUpUser = async (auth, email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

const signInUser = async (auth, email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export { signUpUser, signInUser };
