import Card from '../interface/Card';
import Loading from '../interface/Loading';
import { useEffect, useState } from "react";
import classes from './ShopPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import Modal from '../interface/Modal';
import { useSelector } from 'react-redux';
const ShopPage = () =>{
    const [cardsArray, setCardsArray] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [httpError, sethttpError] = useState('');
    const {visible} = useSelector(state => state.modal)
    useEffect(() => {
        setIsLoading(true)
        async function fetchData(){
            const response = await fetch('https://choco-b9977-default-rtdb.firebaseio.com/clothings.json');
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            const data = await response.json()
            setCardsArray(data);
            setIsLoading(false)
        }

        fetchData().catch(err => {
            if(err.message === 'Failed to fetch'){
                sethttpError('Check your internet connection and try again')
                console.log('Check your internet connection and try again')
            }
        })
    }, [])

    let main;
    if(httpError){
        main = <div className={classes.error}>
            <FontAwesomeIcon icon ={faSadTear}/>
            <p>
            {httpError}
            </p>
            </div>
    }else if(loading){
        main = <Loading/>
    }else{
        main =
        <div className={classes.container}>
            {cardsArray.map( card =>
            <Card
            id = {card.id}
            key = {card.id}
            name = {card.name}
            price = {card.price}
            description = {card.description}
            image = {card.image}/>)}
        </div> 
    }
    return(
        <>
        {main}
        { visible && <Modal/>}
        </>
    )
}

export default ShopPage;