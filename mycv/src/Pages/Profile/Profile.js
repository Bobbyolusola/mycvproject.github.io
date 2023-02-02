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
import BasicInfoEdit from "./components/BasicInfo/BasicInfoEdit";
import BasicInfoPreview from "./components/BasicInfo/BasicInfoPreview";
import SkillsInfoPreview from "./components/Skills/SkillsInfoPreview";
import SkillsInfoEdit from "./components/Skills/SkillsInfoEdit";
import EduInfoEdit from "./components/EduInfo/EduInfoEdit";
import EduInfoPreview from "./components/EduInfo/EduInfoPreview";
import JobsInfoEdit from "./components/jobsInfo/JobsInfoEdit";
import JobsInfoPreview from "./components/jobsInfo/JobsInfoPreview";
import RefInfoEdit from "./components/RefInfo/RefInfoEdit";
import RefInfoPreview from "./components/RefInfo/RefInfoPreview";


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
                    {editMode?.basicInfo ? <BasicInfoEdit saveUser={saveUser}/> : < BasicInfoPreview editUser={editUser}/>}
                    {editMode?.skills ? <SkillsInfoEdit saveUser={saveUser}/> : < SkillsInfoPreview editUser={editUser}/>}
                    {editMode?.education ? <EduInfoEdit saveUser={saveUser}/> : < EduInfoPreview editUser={editUser}/>}
                    {editMode?.jobs ? <JobsInfoEdit saveUser={saveUser}/> : < JobsInfoPreview editUser={editUser}/>}
                    {editMode?.reference ? <RefInfoEdit saveUser={saveUser}/> : < RefInfoPreview editUser={editUser}/>}
                </div>
            </div>
        </div>
    )
}

export default Profile;
