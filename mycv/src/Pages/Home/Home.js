import styles from './Home.module.css'
import Header from "../Header/Header";
import image from "../../Images/image.jpg";
import { useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, doc, setDoc, deleteDoc } from "firebase/firestore";
import db from "../../firebase"
import React from 'react';
import { AiFillPhone, AiTwotoneMail, AiTwotoneHome } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';


const Home = () => {

    const [ users, setUsers ] = useState([]);

    let imgStyle = {
        width: "260px",
        height: "260px",
        borderRadius: "150px"
    }

    useEffect(() => {
        getMyCvData()
    }, []);

    const getMyCvData = () => {
        console.log('Getting data');
        const collectionRef = collection(db, "info");
        onSnapshot(collectionRef, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
            // console.log(data);
            setUsers(data);
            console.log(data[0])
        })
    }

    const Bobby = {
        firstName: "",
        status: '',
        imageUrl: "",
        basicInfo: [ {
            type: 'Phone',
            value: "38097////"
        },
            {
                type: 'Email',
                value: "@"
            },
        ],
        skills: [ "HTML", "js" ],
        reference: [ {
            name: '',
            contacts: {
                email: "",
                phone: ""
            }
        } ],
        education:[{
            name: "HighSchool",
            time: "",
            date:{
                from: "",
                to: ""
            }
        }],
        jobs: [
            {
                companyName: '',
                position: "FE dev",
                date: {
                    from: '',
                    to: ""
                },
                responsibiliteis: [
                    'bug fixing', "revieving code"
                ]
            }
        ]
    }

// IhorKurylov
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
                                <p>Basic Information
                                    <hr/>
                                </p>
                            </div>
                            <div className={styles.phoneInfo}>
                                <div className={styles.Icon}>
                                    <div>
                                        <AiFillPhone/>
                                    </div>
                                    <div>
                                        <AiTwotoneMail/>
                                    </div>
                                    <div>
                                        <BsLinkedin/>
                                    </div>
                                    <div>
                                        <AiTwotoneHome/>
                                    </div>
                                </div>
                                <div className={styles.answerInfo1}>
                                    <p>Phone</p>
                                    <p>Email</p>
                                    <p>LinkedIn</p>
                                    <p>Address</p>
                                </div>
                                <div className={styles.answerInfo2}>
                                    {users && users.map((user) => (
                                        <div><p>{user?.phone}</p>
                                            <p>{user?.email}</p>
                                            <p><a href="https://www.linkedin.com/in/olusola-gbenga-adelabu-952620210/"
                                                  target='_blank'>{user?.linkedln}</a></p>
                                            <p>{user?.address}</p></div>
                                    ))}
                                    {/*{users && users.map((user) =>(*/}
                                    {/*    <p></p>*/}
                                    {/*))}*/}
                                    {/*{users && users.map((user) =>(*/}
                                    {/*    <p><a href="https://www.linkedin.com/in/olusola-gbenga-adelabu-952620210/" target='_blank'>{user?.linkedln}</a></p>*/}
                                    {/*))}*/}
                                    {/*{users && users.map((user) =>(*/}
                                    {/*    <p>{user?.address}</p>*/}
                                    {/*))}*/}

                                </div>
                            </div>
                            <div className={styles.skillsBox}>
                                <div className={styles.skills}>
                                    <p>Skills
                                        <hr/>
                                    </p>
                                </div>
                                <div className={styles.skillsInfo}>
                                    < ol style={{listStyleType: 'disc'}}>
                                        {users && users.map((user) => (
                                            <p>
                                                <li>{user?.firstSkill}</li>
                                            </p>
                                        ))}
                                        {users && users.map((user) => (
                                            <p>
                                                <li>{user?.secondSkill}</li>
                                            </p>
                                        ))}
                                        {users && users.map((user) => (
                                            <p>
                                                <li>{user?.thirdSkill}</li>
                                            </p>
                                        ))}
                                        {users && users.map((user) => (
                                            <p>
                                                <li>{user?.fourthSkill}</li>
                                            </p>
                                        ))}
                                        {users && users.map((user) => (
                                            <p>
                                                <li>{user?.fourthSkill}</li>
                                            </p>
                                        ))}
                                    </ol>
                                </div>
                            </div>

                            <div className={styles.refBox}>
                                <div className={styles.ref}>
                                    <p>Reference
                                        <hr/>
                                    </p>
                                </div>
                                <div className={styles.refInfo}>
                                    <ol style={{listStyleType: 'disc'}}>
                                        <li><b>Name</b></li>
                                        <div className={styles.ref1}>
                                            {users && users.map((user) => (
                                                <p>{user?.company}</p>
                                            ))}
                                            {users && users.map((user) => (
                                                <p>{user?.email}</p>
                                            ))}
                                            {users && users.map((user) => (
                                                <p>{user?.phoneNo}</p>
                                            ))}
                                        </div>
                                        <li><b>Name</b></li>
                                        <div className={styles.ref1}>
                                            {users && users.map((user) => (
                                                <p>{user?.company}</p>
                                            ))}
                                            {users && users.map((user) => (
                                                <p>{user?.email}</p>
                                            ))}
                                            {users && users.map((user) => (
                                                <p>{user?.phoneNo}</p>
                                            ))}
                                        </div>
                                    </ol>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


                <div className={styles.halfRightBox}>
                    <div className={styles.innerBox}>
                        <div className={styles.mainHeaderBox}>
                            <div className={styles.headerBox}>
                                <Header/>
                            </div>
                        </div>
                        <div className={styles.mainEduJobBox}>
                            <div className={styles.eduBox}>
                                <div className={styles.eduHeaderBox}>
                                    Education
                                </div>
                                <div className={styles.eduInfoBox}>
                                    <div>
                                        <ol style={{listStyleType: 'disc'}}>
                                            <li>Banana</li>
                                            <li>Pineapple</li>
                                            <li>Cherry</li>
                                        </ol>
                                    </div>
                                    <div></div>
                                </div>
                            </div>

                            <div className={styles.jobBox}>
                                <div className={styles.jobHeaderBox}>
                                    Job Experience
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home;


