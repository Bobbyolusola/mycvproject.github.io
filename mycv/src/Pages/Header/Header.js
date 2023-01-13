import {Link} from "react-router-dom";
import {AppRoutes} from "../../commom/Routes";
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
            <button type="button" className={styles.buttonHome}>
                <Link style={{textDecoration: "none", backgroundColor: hoverHome ? '#38584C' : 'white',
                color: hoverHome ? 'white' : '#38584C', width: hoverHome ? '200px' : '', height: hoverHome ? '200px' : ''
                }}
                      onMouseEnter = {homeBtn}
                      onMouseLeave = {leaveHomeBtn}
                      to = {AppRoutes.home}>Home</Link></button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className={styles.buttonLogin}>
                <Link style={{textDecoration: "none", backgroundColor: hoverLogin ? 'white' : '#38584C',
                color: hoverLogin ? '#38584C' : 'white', width: hoverLogin ? '200px' : '', height: hoverLogin ? '200px' : ''

                }}
                      onMouseEnter = {loginBtn}
                      onMouseLeave = {leaveLoginBtn}
                      to = {AppRoutes.login}>Login</Link></button>
        </div>
    )
}

export default Header;