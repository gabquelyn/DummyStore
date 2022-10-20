import video from '../../assets/video2.mp4';
import classes from './HomePage.module.css';
import logo from '../../assets/logo.png'
const HomePage = () => {
    return(
        <div className={classes.video}>
            <div className={classes.overlay}/>
                <video src = {video} autoPlay muted loop/>
                <div className={classes.logo} >
                    <img src = {logo} alt = "Brand Logo"/>
                    <span>Neutre</span>
                </div>
                <div className={classes.content}>
                    <h1>NEUTRE</h1>
                    <hr/>
                    <p>A fashion brand focused on providing a nice and warm vogue for ladies. Mixing the 19'0s spice with the heat of the 21st century</p>
                    <p ><i>...Blending beauty and fashion...</i></p>
                </div>
        </div>
    )
}
export default HomePage;