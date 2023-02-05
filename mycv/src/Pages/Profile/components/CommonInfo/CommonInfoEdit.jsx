import styles from "../../Profile.module.css";
import {AiFillSave, AiTwotoneEdit} from "react-icons/ai";
import React from "react";
import { Button } from "rsuite";
import { useForm } from "react-hook-form";
import { Uploader, Message, Loader, useToaster } from 'rsuite';
import AvatarIcon from '@rsuite/icons/legacy/Avatar';


function previewFile(file, callback) {
    const reader = new FileReader();
    reader.onloadend = () => {
        callback(reader.result);
    };
    reader.readAsDataURL(file);
}


const CommonInfoEdit = ({saveUser}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => saveUser('commonInfo', data);

    console.log('errors',errors)

    const toaster = useToaster();
    const [uploading, setUploading] = React.useState(false);
    const [fileInfo, setFileInfo] = React.useState(null);


    return (
        <div className={styles.EditBox}>
            EDIT
            <div className={styles.imageBox}>
                <div>
                    <Uploader
                        fileListVisible={false}
                        listType="picture"
                        action="//jsonplaceholder.typicode.com/posts/"
                        onUpload={file => {
                            setUploading(true);
                            previewFile(file.blobFile, value => {
                                setFileInfo(value);
                            });
                        }}
                        onSuccess={(response, file) => {
                            setUploading(false);
                            toaster.push(<Message type="success">Uploaded successfully</Message>);
                            console.log(response);
                        }}
                        onError={() => {
                            setFileInfo(null);
                            setUploading(false);
                            toaster.push(<Message type="error">Upload failed</Message>);
                        }}
                    >
                        <button style={{ width: 150, height: 150 }}>
                            {uploading && <Loader backdrop center />}
                            {fileInfo ? (
                                <img src={fileInfo} width="100%" height="100%" />
                            ) : (
                                <AvatarIcon style={{ fontSize: 80 }} />
                            )}
                        </button>
                    </Uploader>
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
                    {errors.profession && <span>{errors.profession.message}</span>}

                    <input {...register("about", { required: 'about is required'})}type="textarea"/>
                    {errors.about && <span>{errors.about.message}</span>}

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
