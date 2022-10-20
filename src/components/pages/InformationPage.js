import classes from './InformationPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const InformationPage = () => {
    return(
        <div className={classes.container}>
            <div className={classes.top}>
                <img src = 'https://i.pinimg.com/736x/c0/7c/56/c07c566103ca6cfbf4f42c9f51bcabb9.jpg' alt = 'avatar'/>
            </div> 
                <section>
                    <p>This is just a <b>dummyStore</b>, I used the word "dummy" beacause it pulls data directly from a realtime database (Firebase). It's
                    only meant for a test, it was made with <b>React</b> and <b>Reduxjs</b>.
                    The branding is also an idea that you might want to consider purchasing (winks) :). This was made
                    <b> for display and practice only.</b><br/></p>
                    <p className={classes.love}>Made with <FontAwesomeIcon icon = {faHeart} /> LoneDev.</p>
                </section>
                <div className = {classes.connect}>

                </div>
        </div>
    )
}

export default InformationPage;