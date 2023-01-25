import styles from "../../Profile.module.css";
import image from "../../../../Images/image.jpg";
import { AiTwotoneEdit } from "react-icons/ai";
import React from "react";

const CommonInfoPreview = ({editUser}) => {
    let imgStyle = {
        width: "220px",
        height: "220px",
        borderRadius: "150px"
    }
    return (
        <div className={styles.EditBox}>
            PREVIEW
            <div className={styles.imageBox}>
                <div className={styles.eclipseHome}>
                    <img src={image} alt='photo' style={imgStyle}/>
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
                <button type='button' onClick={()=>{
                    editUser('commonInfo')
                }}
                        style={{
                            height: '25px', width: '50px', display: 'flex',
                            alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                            borderRadius: '3px'
                        }}>
                    <AiTwotoneEdit/>
                    Edit
                </button>
            </div>

        </div>
    )
}

export  default CommonInfoPreview;
