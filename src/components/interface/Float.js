import React from 'react';
import classes from './Float.module.css';
const Float = () => {
    return(
        <div className={classes.container}>
            <div className={`${classes.circle1} ${classes.circle}`}></div>
            <div className={`${classes.circle2} ${classes.circle}`}></div>
            <div className={`${classes.circle3} ${classes.circle}`}></div>
        </div>
    )
}
export default Float;