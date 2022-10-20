import classes from './WishlistPage.module.css';
import FlexCard from "../interface/FlexCard";
import { useSelector } from 'react-redux';
import useId from '../hooks/useId';
const WishListPage = () => {
    const date = new Date()
    const month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
    const {darkMode} = useId()
    const lists = useSelector(state => state.wishlist.lists)
    const available = lists.length;
    const main = lists.map(list => <FlexCard
    name = {list.name}
    price = {list.price}
    description = {list.description}
    image = {list.image}
    id = {list.id}
    key = {list.id}
    />)
    return(
        <div className={classes.page}>
            <p className={classes.head} id = {`${darkMode && classes.dark}`}>{available ? 'My Wishlist' : 'Empty'} <span>{
                `${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()}.`
                }</span></p>
            {main}
        </div>
    )
}

export default WishListPage;