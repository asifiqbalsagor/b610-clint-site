import React, { children } from 'react';
import { createContext } from 'react';

const AuthContext = createContext();
const Context = ({children}) => {
     const userInfo = {
          
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