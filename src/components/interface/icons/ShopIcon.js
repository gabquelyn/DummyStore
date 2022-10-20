import React from "react";
import Icon from "../Icon";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import {pageActions} from '../../../store/page-slice';
import { useDispatch, useSelector} from "react-redux";
import { highlightActions } from "../../../store/highlight-slice";
const ShopIcon = () =>{
    const active = useSelector(state => state.highlight.Shop)

    const dispatch = useDispatch()
    const showShopHandler = () => {
        dispatch(pageActions.setVisiblePage({visiblePage: 'Shop'}))
        dispatch(highlightActions.highlight({page: 'Shop'}))
    }
    return(
        <>
        <div onClick={showShopHandler}>
            <Icon icon = {faShop} active = {active}/>
        </div>
        </>
    );
}

export default ShopIcon;