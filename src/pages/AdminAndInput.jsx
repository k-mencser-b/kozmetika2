import Admin from "./Admin";
import Login from "./Login";
import React, { useState, useEffect } from "react";

const AdminAndInput = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
    const storeUserLoggedIn = localStorage.getItem('isLoggedIn');

    if(storeUserLoggedIn === '1'){
      setIsLoggedIn(true);
    }

    return localStorage.removeItem('isLoggedIn');
  }, [])

  const loginHandler = (nameReducer, passwordReducer) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return(
    <>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
    
        
        {isLoggedIn && <Admin onLogout={logoutHandler}/>}
    
    </>
  )
};

export default AdminAndInput;