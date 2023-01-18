import {Link} from "react-router-dom";
import {AppRoutes} from "../../common/Routes";
import styles from "./Header.module.css";
import {useState} from "react";

const Header = () => {
    const [hoverHome, setHoverHome] = useState(false);
    const homeBtn = () => {
        setHoverHome(true);
    };
    const leaveHomeBtn = () => {
        setHoverHome(false);
    };

    const [hoverLogin, setHoverLogin] = useState(false);
    const loginBtn = () => {
        setHoverLogin(true);
    };
    const leaveLoginBtn = () => {
        setHoverLogin(false);
    };

    return(
        <div>
            <button type="button" className={styles.buttonHome2}>
                <Link style={{textDecoration: "none", backgroundColor: hoverHome ? 'white' : '#38584C',
                color: hoverHome ? '#38584C' : 'white', width: hoverHome ? '200px' : '', height: hoverHome ? '200px' : ''
                }}
                      onMouseEnter = {homeBtn}
                      onMouseLeave = {leaveHomeBtn}
                      to = {AppRoutes.home}>Home</Link></button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className={styles.buttonLogin2}>
                <Link style={{textDecoration: "none", backgroundColor: hoverLogin ? '#38584C' : 'white',
                color: hoverLogin ? 'white' : '#38584C', width: hoverLogin ? '200px' : '', height: hoverLogin ? '200px' : ''

                }}
                      onMouseEnter = {loginBtn}
                      onMouseLeave = {leaveLoginBtn}
                      to = {AppRoutes.login}>Login</Link></button>
        </div>
    )
}

export default Header;