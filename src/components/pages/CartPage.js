import CartItem from "../interface/CartItem";
import classes from "./CartPage.module.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping} from "@fortawesome/free-solid-svg-icons";
const CartPage = () => {
    const {items, totalAmount, totalQuantity} = useSelector(state => state.cart)
    const main = items.map( item => 
        <CartItem
        key = {item.id}
        image = {item.image}
        name = {item.name}
        id = {item.id}
        price = {item.price}
        amount ={item.quantity}
        />)
    return(
        <div className = {classes.page}>
            <div className={classes.head}>
                <b>Shopping Cart</b>
                <p><FontAwesomeIcon className={classes.icon} icon = {faBasketShopping}/>{`${totalQuantity} items`}</p>
                <h2>{`$${totalAmount.toFixed(2)}`}</h2>
            </div>
            {main}
        </div>
    )
}
export default CartPage;