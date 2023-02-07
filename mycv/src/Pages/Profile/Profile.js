import styles from "../Profile/Profile.module.css";
import Header from "../Header/Header"
import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { authUser, setFormData, signOutUser } from "../../Helpers/js-helpers";
import image from "../../Images/image.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { addDoc, collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import {ref, uploadBytesResumable, getDownloadURL, deleteObject} from "firebase/storage";
import db, { storage } from "../../firebase";
import { AiTwotoneEdit } from "react-icons/ai";
import { GoDiffAdded } from "react-icons/go";
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

const me = {
    commonInfo: {
        name: "",
        profession: "",
        about: '',
        image: ''
    },
    basicInfo: [],
    skills: [ "", "" ],
    reference: [
        {name: ''}
    ],
    education: [
        {
            startDate: '',
            endDate: '',
            name: ""
        }
    ],
    jobs: [
        {
            startDate: '',
            endDate: '',
            companyName: "",
            position: ''
        }
    ]
}
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
export const UserContext = createContext(null);
const Profile = () => { //Container / Smart
    const navigate = useNavigate();
    const [ user, setUser ] = useState({});
    const [ editFormValues, setEditFormValues ] = useState([]);
    const [ editId, setEditId ] = useState([]);
    const [ editMode, setEditMode ] = useState(initialEditState)

    useEffect(() => {
        getMyCvData()
    }, []);
    console.log('user', user)
    const getMyCvData = () => {
        const collectionRef = collection(db, authUser().uid);
        onSnapshot(collectionRef, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setUser(data.length === 0 ? {} : data[0]);
        })
    }

    const uploadImage = (file, setUploading) => {
        const storageRef = ref(storage, `/${authUser().uid}/CVphoto/${file.name}`);
        const uploadData = uploadBytesResumable(storageRef, file.blobFile);


        const desertRef = ref(storage, user.commonInfo.imagePath);
        user?.commonInfo?.imagePath && deleteObject(desertRef).then(() => {
        }).catch((error) => {
          console.log(error)
        });

        uploadData.on("state_changed", (snapshot) => {
                const prog = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            }, (err) => console.log(err),
            ()=> {
                // @ts-ignore
                getDownloadURL(uploadData.snapshot.ref)
                    .then(url => {
                        setUploading(false)
                        setUser(prevState => {
                            return {
                                ...prevState,
                                commonInfo:{
                                    ...prevState.commonInfo,
                                    imageUrl: url,
                                    imagePath: `${authUser().uid}/CVphoto/${file.name}`
                                }
                            }
                        })
                    })
            }
        )
    }

    const editUserFB = (id, newUser, key) => {
        const docRef = doc(db, id, key)
        setDoc(docRef, newUser);
    }
    const addUserFB = async (user, path) => {
        const collectionRef = collection(db, path);
        const docRef = await addDoc(collectionRef, user)
    }

    // SAVE USER FNX INTO FIREBASE.
    const saveUser = (editComponentName, data) => {
        const updatedUser = {
            ...user,
            [editComponentName]: {
                ...user[editComponentName],//{ data + imageUrl}
                ...data//{data}
            }
        }
        user?.id
            ? editUserFB(authUser().uid, updatedUser, user?.id)
            : addUserFB(updatedUser, authUser().uid)
        setFormData(false, editComponentName, setEditMode)
    }


    const handleSaveEdit = (id, newUser) => {
        editUser(id, newUser);
        setEditId('');
        setEditFormValues({});
    }

    // const handleDeleteUser = (userId) => {
    //     const docRef = doc(db, "info", userId)
    //     deleteDoc(docRef)
    // }
    //
    // const setFormData = ( value, key) => {
    //     setEditFormValues( (prevState)=> {
    //         return{
    //             ...prevState,
    //             [key]: value,
    //         };
    //     });
    // };


    const editUser = (editComponentName) => {
        setFormData(true, editComponentName, setEditMode)
    }

    const context = {
        user,
        uploadImage
    }

    return (
        <UserContext.Provider value={context}>
            <div>
                <div className={styles.mainBox}>
                    <div className={styles.mainHeaderBox}>
                        <div className={styles.profileHeaderBox}> PROFILE</div>
                        <div className={styles.headerBox}>
                            <Header/>
                            <button type="button" style={btnstyle} onClick={() => signOutUser(navigate)}>LogOut</button>
                        </div>
                    </div>
                    <div className={styles.mainEditBox}>
                        {editMode?.commonInfo ? <CommonInfoEdit saveUser={saveUser}/> :
                            <CommonInfoPreview editUser={editUser} data={user?.commonInfo}/>}
                        {editMode?.basicInfo ? <BasicInfoEdit saveUser={saveUser}/> :
                            <BasicInfoPreview editUser={editUser} data={user?.basicInfo}/>}
                        {editMode?.skills ? <SkillsInfoEdit saveUser={saveUser}/> :
                            <SkillsInfoPreview editUser={editUser}/>}
                        {editMode?.education ? <EduInfoEdit saveUser={saveUser}/> :
                            < EduInfoPreview editUser={editUser}/>}
                        {editMode?.jobs ? <JobsInfoEdit saveUser={saveUser}/> : < JobsInfoPreview editUser={editUser}/>}
                        {editMode?.reference ? <RefInfoEdit saveUser={saveUser}/> :
                            < RefInfoPreview editUser={editUser}/>}
                    </div>
                </div>
            </div>
        </UserContext.Provider>
    )
}

export default Profile;
