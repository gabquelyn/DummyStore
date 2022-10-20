import classes from "./Toggle.module.css";
import { themeActions } from "../../store/theme-slice";
import { useDispatch} from "react-redux";
import useId from "../hooks/useId";
const Toggle = () => {
    const dispatch = useDispatch()
    const themeHandler = () => {
        dispatch(themeActions.setDarkMode())
    }
    const {darkMode} = useId()
    return(
       <div className = {classes.toggle} id = {`${darkMode && classes.dark}`}>
        <label className= {classes.switch} >
            <input type = "checkbox"  onClick = {themeHandler}/>
            <span className ={classes.slider}></span>
        </label>
       </div>
    );
}

export default Toggle;