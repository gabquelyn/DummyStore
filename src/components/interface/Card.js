import React from "react";
import classes from './Card.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import useId from "../hooks/useId";
import { cartSliceActions } from "../../store/cart-slice";
import { wishlistActions } from "../../store/wishlist-slice";
import { useDispatch, useSelector } from "react-redux";
import { modalSliceActions } from "../../store/modal-slice";

const Card = (props) =>{
    const {darkMode} = useId();
    const dispatch = useDispatch()
    const {items} = useSelector(state => state.cart);
    const existingItem = items.find(item => item.id === props.id);
    const lists = useSelector(state => state.wishlist.lists);
    const item ={
        name: props.name,
        id: props.id,
        image: props.image,
        price: props.price,
        description: props.description
    }
    const existingwishItem = lists.find(obj => obj.id === props.id)

    const wishListHandler = () => {
       if(existingwishItem){
        dispatch(wishlistActions.removefromWishList(props.id))
       }else{
        dispatch(wishlistActions.addToWishList(item))
       }
    }

   

    const addToCartHandler = () => {
        
        if(existingItem){
            dispatch(cartSliceActions.clearItemFromCart(props.id))
        }else{
            dispatch(cartSliceActions.addItemToCart({
                id: props.id,
                price: props.price,
                name: props.name,
                image: props.image
            }))
        }
    }

    const showModalHandler = () => {
        dispatch(modalSliceActions.setModalContent(item))
        dispatch(modalSliceActions.toggleModal())
    }
    
    return(
        <div className = {classes.card}>
            <div className={classes.top}>
                <img src = {props.image} alt = {props.name} onClick = {showModalHandler}/>
            </div>
            <div className={classes.bottom} id = {`${darkMode && classes.dark}`}>
                <div className={classes.content}>
                <div className = {classes.icon}>
                    <button onClick = {wishListHandler} className={`${ existingwishItem && classes.active}`}> 
                        <FontAwesomeIcon  icon={faHeart}/>
                    </button>
                    <button className={`${existingItem && classes.greencart}`} onClick = {addToCartHandler} >
                        <FontAwesomeIcon icon = {faCartShopping}/>
                    </button>
                </div>
                <p>{`$${props.price}`}</p>
                <p>{props.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;