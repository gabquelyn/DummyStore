import React from "react";
import Icon from "../Icon";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { pageActions } from "../../../store/page-slice";
import { useSelector } from "react-redux";
import { highlightActions } from "../../../store/highlight-slice";
const HomeIcon = () =>{
    const dispatch = useDispatch()
    const active = useSelector(state => state.highlight.Home)
    const showPageHandler = () =>{
        dispatch(pageActions.setVisiblePage({visiblePage: 'Home'}))
        dispatch(highlightActions.highlight({page: 'Home'}))
    }
    return(
        <span onClick = {showPageHandler}>
            <Icon icon = {faHouse} active = {active}/>
        </span>
    );
}

export default HomeIcon;
