import classes from './FlexCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { cartSliceActions } from '../../store/cart-slice';
import { wishlistActions } from '../../store/wishlist-slice';
import { useDispatch } from 'react-redux';
import useId from '../hooks/useId';
const FlexCard = (props) => {
    const dispatch = useDispatch();
    const {darkMode} = useId();
    const addToCartHandler = () => {
        dispatch(cartSliceActions.addItemToCart(
            {
                id: props.id,
                price: props.price,
                name: props.name,
                image: props.image
            }
        ))
        dispatch(wishlistActions.removefromWishList(props.id))
    }
    const clearItemHandler = () => {
        dispatch(wishlistActions.removefromWishList(props.id))
    }
    return(
        <div className = {classes.flex} id = {`${darkMode && classes.dark}`}>
            <div className={classes.left}>
                <img src = {props.image} alt = {props.name}/>
            </div>
            <div className={classes.center}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <div className={classes.right}>
                <button className={classes.cancel} onClick ={clearItemHandler}><FontAwesomeIcon icon ={faXmark}/></button>
                <h3>{`$${props.price}`}</h3>
                <button className={classes.button} onClick ={addToCartHandler}>
                    <FontAwesomeIcon icon = {faShoppingCart}/>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    )
}
export default FlexCard;