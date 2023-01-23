import styles from './Home.module.css'
import Header from "../Header/Header";
import image from "../../Images/image.jpg";
import {useEffect, useState} from "react";
import {collection, addDoc, onSnapshot, doc, setDoc, deleteDoc} from "firebase/firestore";
import db from "../../firebase"
import React from 'react';
import {AiFillPhone, AiTwotoneMail, AiTwotoneHome} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';


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
          console.log(data);
          setUsers(data);

      })
    }

    const b = {
        commonInfo:{
            lastName: "Bobby",
            firstName: "Olugbenga",
            profession: "Front-end developer",
        },
        basicInfo:[
            {
                type: 'Phone',
                value: "836826228",
            },
            {
                type: 'Phone',
                value: "836826228",
            },
            {
                type: 'Email',
                value: "logos@mail.com",
            },
        ],
        skills: ["", ""],
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
                                         <div className={styles.Icon}>
                                             <div>
                                                 <AiFillPhone />
                                             </div>
                                             <div>
                                                 <AiTwotoneMail />
                                             </div>
                                             <div>
                                                 <BsLinkedin />
                                             </div>
                                             <div>
                                                 <AiTwotoneHome />
                                             </div>
                                         </div>
                                        <div className={styles.answerInfo1}>
                                            <p>Phone</p>
                                            <p>Email</p>
                                            <p>LinkedIn</p>
                                            <p>Address</p>
                                        </div>
                                        <div className={styles.answerInfo2}>
                                            {users && users.map((user) =>(
                                                 <div> <p>{user?.phone}</p>
                                                  <p>{user?.email}</p>
                                                  <p><a href="https://www.linkedin.com/in/olusola-gbenga-adelabu-952620210/" target='_blank'>{user?.linkedln}</a></p>
                                                  <p>{user?.address}</p> </div>
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
                                <div className={styles.mainHeaderBox}>
                                    <div className={styles.headerBox}>
                                        <Header />
                                    </div>
                                </div>
                                <div className={styles.mainEduJobBox}>
                                    <div className={styles.eduBox}>
                                        <div className={styles.eduHeaderBox}>
                                            Education
                                        </div>
                                        <div className={styles.eduInfoBox}>
                                            <div>
                                                <ol style={{ listStyleType: 'disc' }}>
                                                    <div style={{height: "130px", width: '100%', backgroundColor: '' }}>
                                                        <div style={{height: "20px", width: '100%', font: '20px Roboto', color: '#3C3C3C' }}>
                                                            <li> <b>2008 - 2012</b> </li>
                                                        </div>
                                                        <div style={{height: "19px", width: '100%', font: '20px regular Roboto', color: '#3C3C3C', lineHeight: '50px'}}>
                                                            A UNIVERSITY NAME
                                                        </div>
                                                        <div style={{height: "17px", width: '100%', font: '17px regular Roboto', color: '#6B6767', lineHeight: '60px'}}>
                                                            Some Educational Institution acknowledgements
                                                        </div>
                                                    </div>

                                                    <div style={{height: "130px", width: '100%', backgroundColor: '' }}>
                                                        <div style={{height: "20px", width: '100%', font: '20px bold Roboto', color: '#3C3C3C' }}>
                                                            <li> <b>2012 - 2013</b> </li>
                                                        </div>
                                                        <div style={{height: "19px", width: '100%', font: '20px regular Roboto', color: '#3C3C3C', lineHeight: '50px'}}>
                                                            A UNIVERSITY NAME
                                                        </div>
                                                        <div style={{height: "17px", width: '100%', font: '17px regular Roboto', color: '#6B6767', lineHeight: '60px'}}>
                                                            Some Educational Institution acknowledgements
                                                        </div>
                                                    </div>

                                                    <div style={{height: "130px", width: '100%', backgroundColor: '' }}>
                                                        <div style={{height: "20px", width: '100%', font: '20px bold Roboto', color: '#3C3C3C' }}>
                                                            <li> <b>2019 - 2022</b> </li>
                                                        </div>
                                                        <div style={{height: "19px", width: '100%', font: '20px regular Roboto', color: '#3C3C3C', lineHeight: '50px'}}>
                                                            A UNIVERSITY NAME
                                                        </div>
                                                        <div style={{height: "17px", width: '100%', font: '17px regular Roboto', color: '#6B6767', lineHeight: '60px'}}>
                                                            Some Educational Institution acknowledgements
                                                        </div>
                                                    </div>

                                                    <div style={{height: "130px", width: '100%', backgroundColor: '' }}>
                                                        <div style={{height: "20px", width: '100%', font: '20px bold Roboto', color: '#3C3C3C' }}>
                                                            <li> <b>2022</b> </li>
                                                        </div>
                                                        <div style={{height: "19px", width: '100%', font: '20px regular Roboto', color: '#3C3C3C', lineHeight: '50px'}}>
                                                            A UNIVERSITY NAME
                                                        </div>
                                                        <div style={{height: "17px", width: '100%', font: '17px regular Roboto', color: '#6B6767', lineHeight: '60px'}}>
                                                            Some Educational Institution acknowledgements
                                                        </div>
                                                    </div>

                                                </ol>
                                            </div>

                                            <hr />

                                        </div>
                                    </div>

                                    <div className={styles.jobBox}>
                                        <div className={styles.jobHeaderBox}>
                                            Job Experience
                                        </div>
                                        <div className={styles.jobInfoBox}>
                                            <div>
                                                <ol style={{ listStyleType: 'disc' }}>
                                                    <div style={{height: "130px", width: '100%', backgroundColor: '' }}>
                                                        <div style={{height: "20px", width: '100%', font: '20px bold Roboto', color: '#3C3C3C' }}>
                                                            <li> <b>2019 - 2022</b> </li>
                                                        </div>
                                                        <div style={{height: "19px", width: '100%', font: '20px regular Roboto', color: '#3C3C3C', lineHeight: '50px'}}>
                                                            FREELANCE
                                                        </div>
                                                        <div style={{height: "17px", width: '100%', font: '17px regular Roboto', color: '#6B6767', lineHeight: '60px'}}>
                                                            Responsibilities an experience at work
                                                        </div>
                                                    </div>

                                                    <div style={{height: "130px", width: '100%', backgroundColor: '' }}>
                                                        <div style={{height: "20px", width: '100%', font: '20px bold Roboto', color: '#3C3C3C' }}>
                                                            <li> <b>2018 - 2019</b> </li>
                                                        </div>
                                                        <div style={{height: "19px", width: '100%', font: '20px regular Roboto', color: '#3C3C3C', lineHeight: '50px'}}>
                                                            PROCLIQ
                                                        </div>
                                                        <div style={{height: "17px", width: '100%', font: '17px regular Roboto', color: '#6B6767', lineHeight: '60px'}}>
                                                            Responsibilities an experience at work
                                                        </div>
                                                    </div>

                                                    <div style={{height: "130px", width: '100%', backgroundColor: '' }}>
                                                        <div style={{height: "20px", width: '100%', font: '20px bold Roboto', color: '#3C3C3C' }}>
                                                            <li> <b>2014 - 2018</b> </li>
                                                        </div>
                                                        <div style={{height: "19px", width: '100%', font: '20px regular Roboto', color: '#3C3C3C', lineHeight: '50px'}}>
                                                            TRIPLE A GLOBAL TECH
                                                        </div>
                                                        <div style={{height: "17px", width: '100%', font: '17px regular Roboto', color: '#6B6767', lineHeight: '60px'}}>
                                                            Responsibilities an experience at work
                                                        </div>
                                                    </div>

                                                    <div style={{height: "130px", width: '100%', backgroundColor: '' }}>
                                                        <div style={{height: "20px", width: '100%', font: '20px bold Roboto', color: '#3C3C3C' }}>
                                                            <li> <b>2013-2014</b> </li>
                                                        </div>
                                                        <div style={{height: "19px", width: '100%', font: '20px regular Roboto', color: '#3C3C3C', lineHeight: '50px'}}>
                                                            NATIONAL YOUTH SERVICE CORPS
                                                        </div>
                                                        <div style={{height: "17px", width: '100%', font: '17px regular Roboto', color: '#6B6767', lineHeight: '60px'}}>
                                                            Responsibilities an experience at work
                                                         </div>

                                                    </div>



                                                </ol>
                                            </div>
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


