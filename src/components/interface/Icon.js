import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './Icon.module.css';
import useId from "../hooks/useId";
const Icon = (props) =>{
    const {darkMode} = useId()
    return(
        <button className={`${classes.icon} ${props.active && classes.active}`} id = {`${darkMode&&classes.dark}`}>
            <span className={`${props.highlight && classes.highlight}`}><FontAwesomeIcon icon = {props.icon}/></span>
        </button>
    );
}

export default Icon;