import classes from './CartItem.module.css';
import useId from '../hooks/useId';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../../store/cart-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const CartItem = (props) => {
    const dispatch = useDispatch()

    const reduceItemHandler = () => {
        dispatch(cartSliceActions.removeItemFromCart(props.id))
    }

    const increaseItemHandler = () => {
        dispatch(cartSliceActions.addItemToCart({
            id: props.id,
            price: props.price,
            name: props.name,
            image: props.image
        }))
    }

    const clearItemHandler = () => {
        dispatch(cartSliceActions.clearItemFromCart(props.id))
    }

    const {darkMode} = useId();
    return(
    <div className={classes.card} id = {`${darkMode && classes.dark}`}>
        <div className={classes.left}>
            <div className ={classes.right}>
                <button onClick={clearItemHandler}>
                    <FontAwesomeIcon icon = {faXmark}/>
                </button>
                <img src = {props.image} alt = {props.name}/>
            </div>
            <div className = {classes.name}>
                <p>{props.name}</p>
                <p className={classes.price}>{`$${props.price}`}</p>
            </div>
        </div>
        <div className={classes.actions}>
            <button onClick={reduceItemHandler}>-</button>
            <p>{props.amount}</p>
            <button className={classes.increase} onClick = {increaseItemHandler}>+</button>
        </div>
    </div>
    )
}

export default CartItem;