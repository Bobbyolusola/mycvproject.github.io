import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppRoutes, AppRoutesConstants } from "../../common/Routes";
import styles from "./Header.module.css";
import {useState} from "react";
import { signOutUser } from "../../Helpers/js-helpers";

const Header = () => {
    const navigate = useNavigate();
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

    const path = useLocation().pathname

    const getStyle = (route) => {
        return `${styles.btn} ${AppRoutesConstants[route] === path ? styles.active : ''}`
    }

    const redirect = (path) => {
        console.log('path', path)
        navigate(path)
    }

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
            <hr/>
            <div className={styles.btnContainer}>
            {
                Object.keys(AppRoutesConstants).map(route => {
                    return(
                        <div className={getStyle(route)} onClick={()=>redirect(AppRoutesConstants[route])}>{route}</div>
                    )
                })
            }
            <button onClick={signOutUser}>Sign out</button>
            </div>

        </div>
    )
}

export default Header;
