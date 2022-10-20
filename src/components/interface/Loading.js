import classes from './Loading.module.css'
import React from "react";
import useId from '../hooks/useId';
const Loading = () => {
    const {darkMode} = useId()
    return <div className={classes.spinner} id = {`${darkMode && classes.dark}`}></div>
}

export default Loading;