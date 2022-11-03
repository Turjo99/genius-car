import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Auth State Changed", currentUser);
      //   setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const authInfo = { createUser, user };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
