import React, { children } from 'react';
import { createContext } from 'react';
import app from '../../firebase-init/firebase.init';
import { getAuth, signInWithPopup } from 'firebase/auth'
import { useState } from 'react';

const AuthContext = createContext();
const auth = getAuth(app);
const Context = ({ children }) => {
     const [user, setUser] = useState({name:'sagor'});
     const LoginWithGoogle = (provider) => {
          return signInWithPopup(auth, provider);
     }
     
     const userInfo = {
          user,LoginWithGoogle
     }
     return (
          <div>
               <AuthContext.Provider
                    value={userInfo}
               >{ children}</AuthContext.Provider>
          </div>
     );
};

export default Context;