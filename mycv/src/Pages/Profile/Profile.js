import styles from "../Profile/Profile.module.css";
import Header from "../Header/Header"
import React from "react";
import {useNavigate} from "react-router-dom";
import { authUser, setFormData, signOutUser } from "../../Helpers/js-helpers";
import image from "../../Images/image.jpg";
import {useState} from "react";
import {useEffect} from "react";
import {collection, deleteDoc, doc, onSnapshot, setDoc} from "firebase/firestore";
import db from "../../firebase";
import {AiTwotoneEdit} from "react-icons/ai";
import {GoDiffAdded} from "react-icons/go";
import CommonInfoEdit from "./components/CommonInfo/CommonInfoEdit";
import CommonInfoPreview from "./components/CommonInfo/CommonInfoPreview";


const initialEditState = {
    commonInfo: false,
    basicInfo: false,
    skills: false,
    reference: false,
    education: false,
    jobs: false
}
const Profile = () => { //Container / Smart
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [editFormValues, setEditFormValues] = useState([]);
    const [editId, setEditId] = useState([]);
    const [editMode, setEditMode] = useState(initialEditState)


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


    useEffect(()=>{
        console.log('editMode', editMode)
    },[editMode])

    useEffect( ()=> {
        getMyCvData()
    }, []);

    useEffect( ()=> {
        editId !== ' ' && setEditFormValues(users.filter(user => user.id === editId))
    }, [editId])

    const getMyCvData = () => {
        console.log('Getting data', authUser().uid);
        const collectionRef = collection(db, authUser().uid);
        onSnapshot(collectionRef, (snapshot) => {
            const data = snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id}))
            // console.log(data);
            setUsers(data);
        })
    }

    // const editUser = (id, newUser = editFormValues) => {
    //     const docRef = doc(db, "info", id)
    //     setDoc(docRef, newUser);
    // }

    const handleSaveEdit = (id, newUser) => {
        editUser(id, newUser);
        setEditId('');
        setEditFormValues({});
    }

    const handleDeleteUser = (userId) => {
        const docRef = doc(db, "info", userId)
        deleteDoc(docRef)
    }
    //
    // const setFormData = ( value, key) => {
    //     setEditFormValues( (prevState)=> {
    //         return{
    //             ...prevState,
    //             [key]: value,
    //         };
    //     });
    // };


    const saveUser =(editComponentName)=>{
        setFormData(false, editComponentName, setEditMode)
    }
    const editUser =(editComponentName)=>{
        setFormData(true, editComponentName, setEditMode)
    }


    return(
        <div>
            <div className={styles.mainBox}>
                <div className={styles.mainHeaderBox}>
                    <div className={styles.profileHeaderBox}> PROFILE</div>
                    <div className={styles.headerBox}>
                        <Header />
                        <button type="button" style={btnstyle} onClick={()=>signOutUser(navigate)}>LogOut</button>
                    </div>
                </div>
                <div className={styles.mainEditBox}>
                    {editMode?.commonInfo ? <CommonInfoEdit saveUser={saveUser}/> : <CommonInfoPreview editUser={editUser}/>}
                    <div className={styles.basicInfoBox}>
                        <div className={styles.basicInfoBoxHeader}>
                            BASIC INFORMATION
                        </div>
                        <div className={styles.nameValueBasicInfoBox}>
                            <div className={styles.nameBasicInfoBox}>
                                {/*<p>Phone</p>*/}
                                {/*<p>Email</p>*/}
                                {/*<p>LinkedIn</p>*/}
                                {/*<p>Address</p>*/}
                            </div>
                            <div className={styles.valueBasicInfoBox}>
                                {/*{users && users.map((user) =>(*/}
                                {/*    <div> <p>{user?.phone}</p>*/}
                                {/*        <p>{user?.email}</p>*/}
                                {/*        <p><a href="https://www.linkedin.com/in/olusola-gbenga-adelabu-952620210/" target='_blank'>{user?.linkedln}</a></p>*/}
                                {/*        <p>{user?.address}</p> </div>*/}
                                {/*))}*/}
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
                                {/*< ol style={{ listStyleType: 'disc' }}>*/}
                                {/*    {users && users.map((user) =>(*/}
                                {/*        <p><li>{user?.secondSkill}</li></p>*/}
                                {/*    ))}*/}
                                {/*</ol>*/}
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
