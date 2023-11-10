import React, { Fragment } from 'react';
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCardButton';



const Header = (props) => {

    return (
        <Fragment>
            <header className={classes.header } >
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='this is meals'/>
            </div>
        </Fragment>
    )

};


export default Header; 