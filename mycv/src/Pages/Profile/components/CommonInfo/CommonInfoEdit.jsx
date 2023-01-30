import styles from "../../Profile.module.css";
import image from "../../../../Images/image.jpg";
import {AiFillSave, AiTwotoneEdit} from "react-icons/ai";
import React from "react";

const CommonInfoEdit = ({saveUser}) => {
    return (
        <div className={styles.EditBox}>
            EDIT
            <div className={styles.imageBox}>
                <div className={styles.eclipseHome}>
                    {/*<img src={image} alt='photo' style={imgStyle}/>*/}
                </div>
            </div>
            <div className={styles.mainProfBox}>
                <div className={styles.profBoxInfo}>
                    <div className={styles.profession}>

                    </div>
                    <div className={styles.about}>

                    </div>
                </div>
            </div>
            <div className={styles.editBox}>
                <button type='button' onClick={()=> {
                    saveUser('commonInfo')
                }}
                        style={{
                            height: '25px', width: '70px', display: 'flex',
                            alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                            borderRadius: '3px'
                        }}>
                    <AiFillSave />
                    Save
                </button>
            </div>

        </div>
    )
}

export  default CommonInfoEdit;
