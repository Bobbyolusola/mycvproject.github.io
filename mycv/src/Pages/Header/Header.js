import {Link} from "react-router-dom";
import {AppRoutes} from "../../commom/Routes";

const Header = () => {
    return(
        <div>
            <h1>header</h1>
            <button type="button"><Link to = {AppRoutes.home}>Home</Link></button>
            <button type="button"><Link to = {AppRoutes.login}>Login</Link></button>
        </div>
    )
}

export default Header;