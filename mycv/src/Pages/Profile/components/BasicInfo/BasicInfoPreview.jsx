import styles from "../../Profile.module.css";
import {AiTwotoneEdit} from "react-icons/ai";
import React from "react";


const BasicInfoPreview = ({editUser}) => {

    return(
        <div className={styles.basicInfoBox}>
            <div className={styles.basicInfoBoxHeader}>
                PREVIEW
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
                    <button type='button' onClick={()=> {
                        editUser('basicInfo')
                    }}
                            style={{height: '25px', width: '50px', display: 'flex',
                                alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                                borderRadius: '3px'}}>
                        <AiTwotoneEdit />
                        Edit</button>
                </div>
            </div>

        </div>
    )
}

export default BasicInfoPreview;