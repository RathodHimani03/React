import Counter from './components/Counter';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import React from 'react';
import {  useSelector } from 'react-redux';

function App() {

const isAuth = useSelector(state=>state.auth.isAuthenticated)

  return (
    <React.Fragment>
      <Header/>
     {!isAuth && <Auth/>}
     {isAuth && <UserProfile/>}
    <Counter />
    </React.Fragment>
  );
}

export default App;
