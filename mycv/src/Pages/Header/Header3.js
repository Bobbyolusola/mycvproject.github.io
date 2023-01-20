import {Link, useNavigate} from "react-router-dom";
import {AppRoutes} from "../../common/Routes";
import styles from "./Header3.module.css";
import {useState} from "react";
import {signOutUser} from "../../Helpers/js-helpers";
import React from "react";

const Header3 = () => {
    const [hoverHome, setHoverHome] = useState(false);
    const [hover, setHover] = useState(false);

    const homeBtn = () => {
        setHoverHome(true);
    };
    const leaveHomeBtn = () => {
        setHoverHome(false);
    };

    const [hoverProfile, setHoverProfile] = useState(false);
    const profileBtn = () => {
        setHoverProfile(true);
    };
    const leaveProfileBtn = () => {
        setHoverProfile(false);
    }

    const navigate = useNavigate();

    let btnstyle = {
        height: '35px',
        width: '100px',
        backgroundColor: '#BA5858',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        font: '20px regular Roboto',
        letterSpacing: '0.01em',
        color: 'white',
    }

    .hover = {
        cursor: "pointer",
        height: '35px',
        width: '100px',
        backgroundColor: '#BA5858',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        font: '20px regular Roboto',
        letterSpacing: '0.01em',
        color: 'white',
    }



    return(
        <div>
            <button type="button" className={styles.buttonHome2}>
                <Link style={{textDecoration: "none", backgroundColor: hoverHome ? '#38584C' : 'white',
               color: hoverHome ? 'white' : '#38584C', width: hoverHome ? '200px' : '', height: hoverHome ? '200px' : ''
                }}
                      onMouseEnter = {homeBtn}
                      onMouseLeave = {leaveHomeBtn}
                      to = {AppRoutes.home}>Home</Link></button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className={styles.buttonLogin2}>
                <Link style={{textDecoration: "none", backgroundColor: hoverProfile ? 'white' : '#38584C',
                color: hoverProfile ? '#38584C' : 'white', width: hoverProfile ? '200px' : '', height: hoverProfile ? '200px' : ''

                }}
                      onMouseEnter = {profileBtn}
                      onMouseLeave = {leaveProfileBtn}
                      to = {AppRoutes.profile}>Profile</Link></button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" style={btnstyle} onClick={()=>signOutUser(navigate)}>LogOut</button>

        </div>
    )
}

export default Header3;