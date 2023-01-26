import styles from './Login.module.css'
import React, {useState} from "react";
import {auth} from "../../firebase";
import {signInWithEmailAndPassword, AuthErrorCodes} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../common/Routes";
import {setFormData} from "../../Helpers/js-helpers";
import Header from "../Header/Header";

const Login = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);

    let inputStyle={
        height: '38px',
        width: '332px',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        font: '15px regular Roboto',
        letterSpacing: '0.05em',
        color: 'black',
        paddingLeft: '20px'
    }

    let btnStyle ={
        height: '43px',
        width: '355px',
        backgroundColor: '#38584C',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        font: '20px regular Roboto',
        letterSpacing: '0.01em',
        color: 'white',
    }

    let email = formValues.email.toLowerCase().trim();
    let password = formValues.password;

    const login = () => {
        return signInWithEmailAndPassword(auth, email, password) //Promise
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await login()
            localStorage.setItem('auth', JSON.stringify(resp.user))
            navigate(AppRoutes.profile);
            setError('');
            e.target.reset();
        } catch(error){
            if (
                error.code === AuthErrorCodes.INVALID_PASSWORD ||
                error.code === AuthErrorCodes.USER_DELETED
            )
            {
                setError("The email address or password is  incorrect");
            } else
            {
                console.log(error.code);
                alert(error.code);
            }
        }




        //     .then((userCredential) => {
        //     console.log(userCredential.user);
        //     navigate(AppRoutes.profile);
        //         setError('');
        //         e.target.reset();
        // })
        //     .catch((error) => {
        //         if (
        //             error.code === AuthErrorCodes.INVALID_PASSWORD ||
        //             error.code === AuthErrorCodes.USER_DELETED
        //         )
        //         {
        //             setError("The email address or password is  incorrect");
        //         } else
        //         {
        //             console.log(error.code);
        //             alert(error.code);
        //         }
        //     });
    }
    // const handleLoginSubmit = async(e) => {
    //     e.preventDefault();
    //     console.log(auth.currentUser);
    //     if(auth?.currentUser?.uid) {
    //         navigate(AppRoutes.profile);
    //     } else {
    //         setError('');
    //         await login();
    //         e.target.reset();
    //     }
    // }



    return (
        <div>
            <div className={styles.mainBox}>
                <div className={styles.mainHeaderBox}>
                    <div className={styles.headerBox}>
                        <Header />
                    </div>
                </div>
            </div>
            <div className={styles.mainLoginBox}>
                <div className={styles.loginBox}>

                    <form onSubmit={handleLoginSubmit}>
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
                                       placeholder='E-mail address'
                                       onChange={(e) => setFormData(e.target.value, 'email', setFormValues)}/>
                            </div>
                            <br/>
                            <div className={styles.loginPassInput}>
                                <input type='password' style={inputStyle}
                                       placeholder='Password'
                                       onChange={(e) => setFormData(e.target.value, 'password', setFormValues)}/>
                            </div>
                            <br/>
                            <div className={styles.loginBtnInput}>
                                {error ? <p className={styles.loginError}>{error}</p> : null}
                                <button type='submit' style={btnStyle}>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.mainBoxLower}>

            </div>
        </div>

    )
}

export default Login;
