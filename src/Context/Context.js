import { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
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

     const userInfo = {
          loginWithGithub,
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
