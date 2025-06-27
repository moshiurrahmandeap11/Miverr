import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "../AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const xProvider = new TwitterAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // using google
  const googleUser = () => {
    return signInWithPopup(auth, googleProvider)
  }

  // using X
  const xUser = () => {
    return signInWithPopup(auth, xProvider)
  }

  // using facebook
  const facebookUser = () => {
    return signInWithPopup(auth, facebookProvider)
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Current user:", currentUser);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOutUser,
    googleUser,
    xUser,
    facebookUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
