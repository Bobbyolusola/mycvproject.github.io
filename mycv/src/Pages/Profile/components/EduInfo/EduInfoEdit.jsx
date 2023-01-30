import styles from "../../Profile.module.css";
import {GoDiffAdded} from "react-icons/go";
import {MdOutlineSave} from "react-icons/md";
import React from "react";
import {AiFillSave} from "react-icons/ai";

const EduInfoEdit = ({saveUser}) => {
    return(
        <div className={styles.skillsBox}>
            <div className={styles.skillInfoBoxHeader}>
                EDIT
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
                        saveUser('education')
                    }}
                            style={{height: '25px', width: '70px', display: 'flex',
                                alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                                borderRadius: '3px'}}>
                        <AiFillSave />
                        Save</button>
                </div>
            </div>

        </div>
    )
}

export default EduInfoEdit;