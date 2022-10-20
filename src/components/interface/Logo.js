import neutral from '../images/neutral.png';
import Float from './Float'
const Logo = () => {
    return (
        <div style={{alignItems: 'center,', justifyContent: 'center'}}>
            <img src = {neutral} alt = 'logo' style={{height: '50px'}}/>
            <Float/>
        </div>
       
    )
    
}
export default Logo;