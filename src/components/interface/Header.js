import React from "react";
import Icon from "./Icon";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classes from './Header.module.css';
import Logo from "./Logo";

const Header = () => {
    return (
        <div className = {classes.header}>
            <div>
                <Logo/>
            </div>
            <div>
                <Icon icon = {faBars}/>
            </div>
        </div>
    )
}

export default Header;