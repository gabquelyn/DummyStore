import React from "react";
import Icon from "../Icon";
import {faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { highlightActions } from "../../../store/highlight-slice";
import { pageActions } from "../../../store/page-slice";
const AboutUsIcon = () =>{
    const active = useSelector(state => state.highlight.AboutUs)
    const dispatch = useDispatch()
    const setAboutPageHandler = () => {
        dispatch(pageActions.setVisiblePage({visiblePage: 'AboutUs'}))
        dispatch(highlightActions.highlight({page: 'AboutUs'}))
    }
    return(
        <div onClick = {setAboutPageHandler}>
            <Icon icon = {faCircleInfo} active = {active}/>
        </div>
    );
}

export default AboutUsIcon;
