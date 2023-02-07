import styles from "../../Profile.module.css";
import { AiFillSave, AiTwotoneEdit } from "react-icons/ai";
import React, { useEffect, useContext } from "react";
import { Button } from "rsuite";
import { FormProvider, useForm } from "react-hook-form";
import { Uploader, Message, Loader, useToaster } from 'rsuite';
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import { UserContext } from "../../Profile";
import { logDOM } from "@testing-library/react";


function previewFile(file, callback) {
    const reader = new FileReader();
    reader.onloadend = () => {
        callback(reader.result);
    };
    reader.readAsDataURL(file);
}


const CommonInfoEdit = ({saveUser}) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const formMethods = useForm({mode: 'all'});
    const onSubmit = data => saveUser('commonInfo', data);
    const {user, uploadImage} = useContext(UserContext)


    const toaster = useToaster();
    const [ uploading, setUploading ] = React.useState(false);
    const [ fileInfo, setFileInfo ] = React.useState(null);

    useEffect(() => {
        console.log("usaeeEffect", user?.commonInfo?.name)
        if (user?.commonInfo?.name) {
            console.log("here")
            formMethods?.setValue('name', user?.commonInfo?.name, {shouldDirty: true})
            formMethods?.setValue('profession', user?.commonInfo?.name, {shouldDirty: true})
            formMethods?.setValue('about', user?.commonInfo?.about, {shouldDirty: true})
        }
    }, [ user ])
    return (
        <FormProvider {...formMethods}>
            <div className={styles.EditBox}>
                EDIT
                <div className={styles.imageBox}>
                    <div>
                        <Uploader
                            fileListVisible={false}
                            autoUpload={false}
                            listType="picture"
                            multiple={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                            onChange={list => {
                                setUploading(true);
                                previewFile(list[0].blobFile, value => {
                                    setFileInfo(value);
                                });
                                uploadImage(list[0], setUploading)
                            }}
                            // onUpload={file => {
                            //     setUploading(true);
                            //     previewFile(file.blobFile, value => {
                            //         setFileInfo(value);
                            //     });
                            // }}
                            // onSuccess={(response, file) => {
                            //     setUploading(false);
                            //     toaster.push(<Message type="success">Uploaded successfully</Message>);
                            //     console.log(response);
                            // }}
                            // onError={() => {
                            //     setFileInfo(null);
                            //     setUploading(false);
                            //     toaster.push(<Message type="error">Upload failed</Message>);
                            // }}
                        >
                            <button style={{width: 150, height: 150}}>
                                {uploading && <Loader backdrop center/>}
                                {fileInfo ? (
                                    <img src={fileInfo} width="100%" height="100%"/>
                                ) : (
                                    <AvatarIcon style={{fontSize: 80}}/>
                                )}
                            </button>
                        </Uploader>
                    </div>
                </div>

                <div className={styles.mainProfBox}>
                    <div className={styles.profBoxInfo}>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.name}>
                                <input {...register("name", {required: 'name is required'})} type="text"/>
                                {errors.name && <span>{errors.name.message}</span>}
                            </div>
                            <div className={styles.profession}>
                                <input {...register("profession", {required: 'profession is required'})} type="text"/>
                                {errors.profession && <span>{errors.profession.message}</span>}
                            </div>
                            <div className={styles.c}>
                                <input {...register("about", {required: 'about is required'})} type="textarea"/>
                                {errors.about && <span>{errors.about.message}</span>}
                            </div>
                            {/*<div className={styles.editBox}>*/}
                            <button type='submit'
                                    style={{
                                        height: '25px', width: '70px', display: 'flex',
                                        alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                                        borderRadius: '3px'
                                    }}
                            disabled={uploading}>
                                <AiFillSave/>
                                Save
                            </button>
                            {/*</div>*/}
                        </form>
                    </div>
                </div>


            </div>
        </FormProvider>
    )
}

export default CommonInfoEdit;
