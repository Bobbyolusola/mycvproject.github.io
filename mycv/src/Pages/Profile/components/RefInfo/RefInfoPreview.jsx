import styles from "../../Profile.module.css";
import React from "react";
import {GoDiffAdded} from "react-icons/go";
import {AiTwotoneEdit} from "react-icons/ai";

const RefInfoPreview = ({editUser}) => {
    return(
        <div className={styles.skillsBox}>
            <div className={styles.skillInfoBoxHeader}>
                PREVIEW
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
                    <button type='button'
                            style={{height: '25px', width: '60px', display: 'flex',
                                alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                                borderRadius: '3px'}}>
                        <GoDiffAdded /> &nbsp; Add
                    </button>
                </div>
                <div className={styles.editSkillsBox}>
                    <button type='button' onClick={()=> {
                        editUser('reference')
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

export default RefInfoPreview;

