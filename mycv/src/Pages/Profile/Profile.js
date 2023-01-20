import styles from "../Profile/Profile.module.css";
import Header from "../Header/Header3";
import React from "react";
import {useNavigate} from "react-router-dom";
import {signOutUser} from "../../Helpers/js-helpers";
import image from "../../Images/image.jpg";
import {useState} from "react";
import {useEffect} from "react";
import {collection, onSnapshot} from "firebase/firestore";
import db from "../../firebase";
import {AiTwotoneEdit} from "react-icons/ai";

const Profile = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    let imgStyle = {
        width: "220px",
        height: "220px",
        borderRadius: "150px"
    }

    useEffect( ()=> {
        getMyCvData()
    }, []);

    const getMyCvData = () => {
        console.log('Getting data');
        const collectionRef = collection(db, "info");
        onSnapshot(collectionRef, (snapshot) => {
            const data = snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id}))
            // console.log(data);
            setUsers(data);

        })
    }

    return(
        <div>
            <div className={styles.mainBox}>
                <div className={styles.mainHeaderBox}>
                    <div className={styles.headerBox}>
                        <Header />
                    </div>
                </div>
                <div className={styles.mainEditBox}>
                    <div className={styles.EditBox}>
                        <div className={styles.imageBox}>
                            <div className={styles.eclipseHome}>
                                <img src={image} alt='photo' style={imgStyle}/>
                            </div>
                        </div>
                        <div className={styles.mainProfBox}>
                            <div className={styles.profBoxInfo}>
                                <div className={styles.profession}>
                                    {users && users.map((user) => (
                                        <p> {user?.profession}</p>
                                    ))}
                                </div>
                                <div className={styles.about}>
                                    {users && users.map((user) => (
                                        <p> {user?.about}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles.editBox}>
                            <button type='button'
                                    style={{height: '25px', width: '50px', display: 'flex',
                                        alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                                        borderRadius: '3px'}}>
                                <AiTwotoneEdit />
                                Edit</button>
                        </div>

                    </div>
                    <div className={styles.basicInfoBox}>

                    </div>
                    <div className={styles.skillsBox}>

                    </div>
                    <div className={styles.educationBox}>

                    </div>
                    <div className={styles.jobExpBox}>

                    </div>
                    <div className={styles.refBox}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;