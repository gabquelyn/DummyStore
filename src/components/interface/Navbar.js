import React from 'react';
import ActivitiesIcon from './icons/ActivitiesIcon';
import HomeIcon from './icons/HomeIcon';
import ShopIcon from './icons/ShopIcon';
import AboutUsIcon from './icons/AboutIcon';
import classes from './Navbar.module.css';
import Float from './Float';
import useId from '../hooks/useId';
const Navbar = () =>{
    const {darkMode} = useId()
    return(
        <div className={`${classes.nav}`} id = {`${darkMode&&classes.dark}`}>
            <Float/>
            <div>
                <p>Home</p>
                <HomeIcon/>
            </div>
            <div>
                <p>Shop</p>
                <ShopIcon/>
            </div>
            <div>
                <p>Activities</p>
                <ActivitiesIcon/>
            </div>
            <div className={classes.last}>
                <p>About us</p>
                <AboutUsIcon/>
            </div>
        </div>
    );
}

export default Navbar;