import styles from './Home.module.css'
import Header from "../Header/Header";
import image from "../../Images/image.jpg";
import {useEffect, useState} from "react";
import {collection, addDoc, onSnapshot, doc, setDoc, deleteDoc} from "firebase/firestore";
import db from "../../firebase"
import React from 'react';


const Home = () => {

    const [users, setUsers] = useState([]);

    let imgStyle = {
        width: "260px",
        height: "260px",
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

    return (

            <div>
                    <div className={styles.mainBox}>
                        <div className={styles.halfLeftBox}>
                            <div className={styles.InnerHalfLeftBox}>
                                <div className={styles.imgBox}>
                                    <div className={styles.eclipseHome}>
                                        <img src={image} alt='photo' style={imgStyle}/>
                                    </div>

                                    <div className={styles.headerName}>
                                        {users && users.map((user) => (
                                            <p> {user?.firstName} {user?.lastName}</p>
                                            ))}
                                    </div>
                                    <div className={styles.subHeaderName}>
                                        {users && users.map((user) => (
                                            <p> {user?.profession}</p>
                                        ))}
                                    </div>
                                    <div className={styles.secondSubHeaderName}>
                                        <div className={styles.innerSecondSubHeaderName}>
                                            {users && users.map((user) => (
                                                <p> {user?.about}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>


                                <div className={styles.basicInfoBox}>
                                    <div className={styles.basicInfoHeader}>
                                        <p>Basic Information<hr/></p>
                                    </div>
                                    <div className={styles.phoneInfo}>
                                        <div className={styles.answerInfo1}>
                                            <p>Phone</p>
                                            <p>Email</p>
                                            <p>Address</p>
                                        </div>
                                        <div className={styles.answerInfo2}>
                                            {users && users.map((user) =>(
                                                <p>{user?.phone}</p>
                                            ))}
                                            {users && users.map((user) =>(
                                                <p>{user?.email}</p>
                                            ))}
                                            {users && users.map((user) =>(
                                                <p>{user?.address}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={styles.skillsBox}>
                                        <div className={styles.skills}>
                                            <p>Skills<hr/></p>
                                        </div>
                                        <div  className={styles.skillsInfo}>
                                            < ol style={{ listStyleType: 'disc' }}>
                                                {users && users.map((user) =>(
                                                <p><li>{user?.firstSkill}</li></p>
                                                ))}
                                                {users && users.map((user) =>(
                                                 <p><li>{user?.secondSkill}</li></p>
                                                ))}
                                                {users && users.map((user) =>(
                                                 <p><li>{user?.thirdSkill}</li></p>
                                                ))}
                                                {users && users.map((user) =>(
                                                <p><li>{user?.fourthSkill}</li></p>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>

                                    <div className={styles.refBox}>
                                        <div className={styles.ref}>
                                            <p>Reference<hr/></p>
                                        </div>
                                        <div  className={styles.refInfo}>
                                            <ol style={{ listStyleType: 'disc' }}>
                                                <li><b>Name</b></li>
                                                    <div className={styles.ref1}>
                                                        {users && users.map((user) =>(
                                                            <p>{user?.company}</p>
                                                        ))}
                                                        {users && users.map((user) =>(
                                                            <p>{user?.email}</p>
                                                        ))}
                                                        {users && users.map((user) =>(
                                                            <p>{user?.phoneNo}</p>
                                                        ))}
                                                    </div>
                                                <li><b>Name</b></li>
                                                <div className={styles.ref1}>
                                                    {users && users.map((user) =>(
                                                        <p>{user?.company}</p>
                                                    ))}
                                                    {users && users.map((user) =>(
                                                        <p>{user?.email}</p>
                                                    ))}
                                                    {users && users.map((user) =>(
                                                        <p>{user?.phoneNo}</p>
                                                    ))}
                                                </div>
                                            </ol>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className={styles.halfRightBox} >
                            <div className={styles.innerBox}>
                                <div className={styles.headerBox}>
                                    <Header />
                                </div>
                            </div>
                        </div>
                </div>
            </div>


    )
}

export default Home;


