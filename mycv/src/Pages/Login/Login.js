import styles from './Login.module.css'
import React, {useState} from "react";
import Header2 from "../Header/Header2";
import {auth} from "../../firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../common/Routes";
import {setFormData} from "../../Helpers/js-helpers";

const Login = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });

    let inputStyle={
        height: '38px',
        width: '332px',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        font: '15px regular Roboto',
        letterSpacing: '0.05em',
        color: '#98A5A0'
    }

    let btnStyle ={
        height: '43px',
        width: '337px',
        backgroundColor: '#38584C',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        font: '20px regular Roboto',
        letterSpacing: '0.01em',
        color: 'white',
    }


    const login = async() => {
        await signInWithEmailAndPassword(auth, formValues.email, formValues.password)
            .then((res) => res.user)
            .catch((error) => console.log(error));
        console.log(auth.currentUser);
    }

    const handleLoginSub = async(e) => {
        e.preventDefault();
        await login();
        console.log(auth.currentUser);
        auth?.currentUser?.uid && navigate(AppRoutes.profile)

    }

    return (
        <div>
            <div className={styles.mainBox}>
                <div className={styles.mainHeaderBox}>
                    <div className={styles.headerBox}>
                        <Header2 />
                    </div>
                </div>
            </div>
            <div className={styles.mainLoginBox}>
                <div className={styles.loginBox}>

                    <form onSubmit={handleLoginSub}>
                        <div className={styles.loginHeaderDiv}>
                            <div className={styles.loginHeader}>
                                LOGIN
                            </div>
                            <div className={styles.loginSubHeader}>
                                Login into your account to access
                                your CV
                            </div>
                        </div>
                        <div className={styles.loginInputDiv}>
                            <div className={styles.loginEmailInput}>
                                <input type='email' style={inputStyle}
                                       placeholder='    E-mail address'
                                       onChange={(e) => setFormData(e.target.value, 'email', setFormValues)}/>
                            </div>
                            <br/>
                            <div className={styles.loginPassInput}>
                                <input type='password' style={inputStyle}
                                       placeholder='    Password'
                                       onChange={(e) => setFormData(e.target.value, 'password', setFormValues)}/>
                            </div>
                            <br/>
                            <div className={styles.loginBtnInput}>
                                <button type='submit' style={btnStyle}>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default Login