import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);

// this is from firebase config
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // before login user is null
  const [loading, setLoading] = useState(false);

  // this for signUp
  const createUser = (email, password) => {
    setLoading(true); // by this take a time to create the user
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // this is fro login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // for logout a user we need just auth
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // this is to see the state of the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
