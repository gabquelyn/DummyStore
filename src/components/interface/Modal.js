import React from 'react';
import classes from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faXmark } from '@fortawesome/free-solid-svg-icons';
import useId from '../hooks/useId';
import { modalSliceActions } from '../../store/modal-slice';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceActions } from '../../store/cart-slice';
import { wishlistActions } from '../../store/wishlist-slice';

const Modal = () => {
    const {darkMode} = useId()
    const {item} = useSelector(state => state.modal)
    const {items} = useSelector(state => state.cart)
    const {lists} = useSelector(state => state.wishlist)
    const dispatch = useDispatch();
    const existsInCart = items.find(obj => obj.id === item.id)
    const existingInWishList = lists.find(list => list.id === item.id)
    const toggleModalHandler = () => {
        dispatch(modalSliceActions.toggleModal());
    }
    const addToCartHandler = () => {
        dispatch(cartSliceActions.addItemToCart(item));
        dispatch(modalSliceActions.toggleModal());
    }
    const wishlistHandler = () => {
        dispatch(wishlistActions.addToWishList(item));
        dispatch(modalSliceActions.toggleModal());
    }
    return(
        <div className={classes.backdrop}>
            <div className={classes.modal} id = {`${darkMode && classes.dark}`}>
                <button className={classes.cancel} onClick = {toggleModalHandler}><FontAwesomeIcon icon = {faXmark}/></button>
                <img src = {item.image} alt = {item.name}/>
                <div>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <h3 className={classes.price}>{`$${item.price}`}</h3>
                    <div className={classes.actions}>
                        {!existingInWishList && <button onClick ={wishlistHandler}>Add to wishlist</button>}
                        {!existsInCart && <button onClick = {addToCartHandler} className={classes.cartbutton}><FontAwesomeIcon className={classes.icon} icon ={faShoppingCart}/>Add to cart</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;