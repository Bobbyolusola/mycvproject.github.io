import styles from "../../Profile.module.css";
import image from "../../../../Images/image.jpg";
import {AiFillSave, AiTwotoneEdit} from "react-icons/ai";
import React from "react";
import { Button } from "rsuite";
import { useForm } from "react-hook-form";

const CommonInfoEdit = ({saveUser}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => saveUser('commonInfo', data);

    console.log('errors',errors)

    return (
        <div className={styles.EditBox}>
            EDIT
            <div className={styles.imageBox}>
                <div className={styles.eclipseHome}>
                    {/*<img src={image} alt='photo' style={imgStyle}/>*/}
                </div>
            </div>
            <div className={styles.mainProfBox}>
                {/*<div className={styles.profBoxInfo}>*/}
                {/*    <div className={styles.name}>*/}
                {/*        <input type="text"/>*/}
                {/*    </div>*/}
                {/*    <div className={styles.profession}>*/}
                {/*        <input type="text"/>*/}
                {/*    </div>*/}
                {/*    <div className={styles.c}>*/}
                {/*        <input type="textarea"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: 'name is required'})}  type="text"/>
                    {errors.name && <span>{errors.name.message}</span>}
                    <input {...register("profession", { required: 'profession is required' })} type="text"/>

                    <input {...register("about", { required: 'about is required'})}type="textarea"/>
                    <div className={styles.editBox}>
                        <button type='submit'
                                style={{
                                    height: '25px', width: '70px', display: 'flex',
                                    alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                                    borderRadius: '3px'
                                }}>
                            <AiFillSave />
                            Save
                        </button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export  default CommonInfoEdit;
