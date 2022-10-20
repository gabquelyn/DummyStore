import { useSelector } from "react-redux";
const useId = () => {
    const darkMode = useSelector(state => state.theme.darkMode);
    return{
        darkMode
    }
}

export default useId;