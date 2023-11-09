import React from "react";


//here authcontext is object which contain a component
const AuthContext =React.createContext({
    isLoggedIn:false
});

export default AuthContext;