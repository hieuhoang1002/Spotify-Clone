import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // Email and Pasword
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
    signInWithRedirect(auth, provider);
  };

  // Facebook
  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User", currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, user, logout, signIn, googleSignIn, facebookSignIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
