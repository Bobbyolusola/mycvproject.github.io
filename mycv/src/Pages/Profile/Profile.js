import styles from "../Profile/Profile.module.css";
import Header from "../Header/Header3";
import React from "react";
import {useNavigate} from "react-router-dom";
import {signOutUser} from "../../Helpers/js-helpers";
import image from "../../Images/image.jpg";
import {useState} from "react";
import {useEffect} from "react";
import {collection, deleteDoc, doc, onSnapshot, setDoc} from "firebase/firestore";
import db from "../../firebase";
import {AiTwotoneEdit} from "react-icons/ai";
import {GoDiffAdded} from "react-icons/go";

const Profile = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [editFormValues, setEditFormValues] = useState([]);
    const [editId, setEditId] = useState([]);

    let imgStyle = {
        width: "220px",
        height: "220px",
        borderRadius: "150px"
    }

    useEffect( ()=> {
        getMyCvData()
    }, []);

    useEffect( ()=> {
        editId !== ' ' && setEditFormValues(users.filter(user => user.id === editId))
    }, [editId])

    const getMyCvData = () => {
        console.log('Getting data');
        const collectionRef = collection(db, "info");
        onSnapshot(collectionRef, (snapshot) => {
            const data = snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id}))
            // console.log(data);
            setUsers(data);
        })
    }

    const editUser = (id, newUser = editFormValues) => {
        const docRef = doc(db, "info", id)
        setDoc(docRef, newUser);
    }

    const handleSaveEdit = (id, newUser) => {
        editUser(id, newUser);
        setEditId('');
        setEditFormValues({});
    }

    const handleDeleteUser = (userId) => {
        const docRef = doc(db, "info", userId)
        deleteDoc(docRef)
    }

    const setFormData = ( value, key) => {
        setEditFormValues( (prevState)=> {
            return{
                ...prevState,
                [key]: value,
            };
        });
    };



    return(
        <div>
            <div className={styles.mainBox}>
                <div className={styles.mainHeaderBox}>
                    <div className={styles.profileHeaderBox}> PROFILE</div>
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
                            <button type='button' onClick={editUser}
                                    style={{height: '25px', width: '50px', display: 'flex',
                                        alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                                        borderRadius: '3px'}}>
                                <AiTwotoneEdit />
                                Edit</button>
                        </div>

                    </div>
                    <div className={styles.basicInfoBox}>
                        <div className={styles.basicInfoBoxHeader}>
                            BASIC INFORMATION
                        </div>
                        <div className={styles.nameValueBasicInfoBox}>
                            <div className={styles.nameBasicInfoBox}>
                                <p>Phone</p>
                                <p>Email</p>
                                <p>LinkedIn</p>
                                <p>Address</p>
                            </div>
                            <div className={styles.valueBasicInfoBox}>
                                {users && users.map((user) =>(
                                    <div> <p>{user?.phone}</p>
                                        <p>{user?.email}</p>
                                        <p><a href="https://www.linkedin.com/in/olusola-gbenga-adelabu-952620210/" target='_blank'>{user?.linkedln}</a></p>
                                        <p>{user?.address}</p> </div>
                                ))}
                            </div>
                            <div className={styles.basicEditBox}>
                                <button type='button' onClick={editUser}
                                        style={{height: '25px', width: '50px', display: 'flex',
                                            alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                                            borderRadius: '3px'}}>
                                    <AiTwotoneEdit />
                                    Edit</button>
                            </div>
                        </div>

                    </div>
                    <div className={styles.skillsBox}>
                        <div className={styles.skillInfoBoxHeader}>
                            SKILLS
                        </div>
                        <div className={styles.skillValueBoxHeader}>
                            <div  className={styles.addSkillInfoBoxHeader}>
                                < ol style={{ listStyleType: 'disc' }}>
                                    {users && users.map((user) =>(
                                        <p><li>{user?.secondSkill}</li></p>
                                    ))}
                                </ol>
                            </div>
                            <div  className={styles.addSkillsIcon}>
                                <button type='button' onClick={editUser}
                                        style={{height: '25px', width: '60px', display: 'flex',
                                            alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                                            borderRadius: '3px'}}>
                                    <GoDiffAdded /> &nbsp; Add
                                </button>
                            </div>
                            <div className={styles.editSkillsBox}>
                                <button type='button' onClick={editUser}
                                        style={{height: '25px', width: '50px', display: 'flex',
                                            alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                                            borderRadius: '3px'}}>
                                    <AiTwotoneEdit />
                                    Edit</button>
                            </div>
                        </div>

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