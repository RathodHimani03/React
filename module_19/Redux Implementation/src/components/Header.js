import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';


const Header = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(state=>state.auth.isAuthenticated);
 
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {
        isAuth  &&
        <React.Fragment>
          <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={()=>{dispatch(authActions.logout())}}>Logout</button>
          </li>
        </ul>
      </nav>
        </React.Fragment>
      }
    </header>
  );
};

export default Header;
