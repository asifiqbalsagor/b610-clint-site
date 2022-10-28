import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import app from "../firebase-config/firebase-config";
export const AuthContext = createContext();


const auth = getAuth(app);
const Context = ({ children }) => {
  const [user, setUser] = useState({ name: "sagor" });
  const LoginWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
     };
     
     const loginWithGithub = (provider) => {
          return signInWithPopup(auth, provider);
}

     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const loginUser = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password);
        };
     const userInfo = {
          loginUser,
          loginWithGithub,
          createUser,
          user,
          LoginWithGoogle,
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;
