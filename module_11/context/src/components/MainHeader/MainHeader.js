import React,{useContext} from 'react';
import AuthContext from '../store/auth-context';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';



const MainHeader = () => {
 
  const authctx = useContext(AuthContext)
  
 
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={authctx.onLogout} />
    </header>
  );
};

export default MainHeader;
