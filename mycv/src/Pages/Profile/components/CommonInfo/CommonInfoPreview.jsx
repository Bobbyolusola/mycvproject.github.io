import styles from "../../Profile.module.css";
import image from "../../../../Images/image.jpg";
import { AiTwotoneEdit } from "react-icons/ai";
import React, { useContext } from "react";
import { UserContext } from "../../Profile";

let imgStyle = {
    width: "220px",
    height: "220px",
    borderRadius: "150px"
}

const CommonInfoPreview = ({editUser}) => {
const { user } = useContext(UserContext)

    return (
        <div className={styles.EditBox}>
            PREVIEW
            <div className={styles.imageBox}>
                <div className={styles.eclipseHome}>
                    <img src={user?.commonInfo?.imageUrl} alt='photo' style={imgStyle}/>
                </div>
                {user?.commonInfo?.name}

            </div>
            <div className={styles.mainProfBox}>
                <div className={styles.profBoxInfo}>
                    <div className={styles.profession}>
                        {user?.commonInfo?.profession}
                    </div>
                    <div className={styles.about}>
                        {user?.commonInfo?.about}
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
