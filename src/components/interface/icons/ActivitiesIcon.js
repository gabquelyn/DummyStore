import React from "react";
import Icon from "../Icon";
import { faCartShopping, faHeart} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../../store/page-slice";
import { highlightActions } from "../../../store/highlight-slice";
const CartIcon = () =>{
    const dispatch = useDispatch();
    const active = useSelector(state => state.highlight.Cart);
    const active1 = useSelector(state => state.highlight.WishList)
    const lists = useSelector(state => state.wishlist.lists)
    const isWishlist = lists.length;
    const {totalQuantity} = useSelector(state => state.cart)
    const showCartPageHandler = () => {
        dispatch(pageActions.setVisiblePage({visiblePage: 'Cart'}))
        dispatch(highlightActions.highlight({page: 'Cart'}))
    }

    const showWishListPageHandler = () => {
        dispatch(pageActions.setVisiblePage({visiblePage: 'WishList'}))
        dispatch(highlightActions.highlight({page: 'WishList'}))
    }

    return(
        <>
            <div onClick={showCartPageHandler}>
                <Icon icon = {faCartShopping} highlight = {totalQuantity} active = {active}/>
            </div>
            <div onClick={showWishListPageHandler}>
                <Icon icon = {faHeart} highlight = {isWishlist} active ={active1}/>
            </div>
        </>
    );
}

export default CartIcon;