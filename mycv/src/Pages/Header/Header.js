import { Link, useLocation, useNavigate } from "react-router-dom";
import {AppRoutes, AppRoutesAuth, AppRoutesConstants, AppRoutesLog} from "../../common/Routes";
import styles from "./Header.module.css";
import {useState} from "react";
import { authUser, signOutUser } from "../../Helpers/js-helpers";
import { auth } from "../../firebase";

const Header = () => {
    const navigate = useNavigate();
    const user = authUser();
    const path = useLocation().pathname

    const getStyle = (route) => {
        return `${styles.btn} ${AppRoutesConstants[route] === path ? styles.active : ''}`
    }

    const redirect = (path) => {
        console.log('path', path)
        navigate(path)
    }
    console.log(auth?.currentUser)

    return(
        <div>

            <div className={styles.btnContainer}>
            {
                Object.keys(user?.uid ? AppRoutesAuth
                    : !user?.uid ? AppRoutesLog
                    : AppRoutesConstants).map(route => {
                    return(
                        <div className={getStyle(route)} onClick={()=>redirect(AppRoutesConstants[route])}>{route}</div>
                    )
                })
            }
            </div>

        </div>
    )
}

export default Header;
