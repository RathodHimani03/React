import React, { useEffect,useState } from "react";


//here authcontext is object which contain a component

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (fistname, lastname) => { }
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true)
    }

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);

    return (

        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}>
            {props.children}
        </AuthContext.Provider>);
}

export default AuthContext ;