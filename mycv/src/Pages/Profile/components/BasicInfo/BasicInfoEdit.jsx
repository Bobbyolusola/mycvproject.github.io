import styles from "../../Profile.module.css";
import {AiFillSave} from "react-icons/ai";
import React from "react";
import {useForm} from "react-hook-form";
import {GoDiffAdded} from "react-icons/go";


const BasicInfoEdit = ({saveUser}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => saveUser('basicInfo', data);

    console.log('errors',errors)

    return(
        <div className={styles.basicInfoBox}>
            <div className={styles.basicInfoBoxHeader}>
                EDIT
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
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <label> Phone:
                    <input {...register("phone", { required: 'phone is required'})}  type="text"/>
                    {errors.phone && <span>{errors.phone.message}</span>}
                    </label>

                    <label>Email:
                    <input {...register("email", { required: 'email is required'})}  type="text"/>
                    {errors.email && <span>{errors.email.message}</span>}
                    </label>

                    <label>Linkedln:
                    <input {...register("linkedln", { required: 'linkedln is required'})}  type="text"/>
                    {errors.linkedln && <span>{errors.linkedln.message}</span>}
                    </label>

                    <label>Address:
                    <input {...register("address", { required: 'address is required'})}  type="text"/>
                    {errors.address && <span>{errors.address.message}</span>}
                    </label>

                    <div className={styles.basicEditBox}>
                        <button type='submit'
                                style={{height: '25px', width: '70px', display: 'flex',
                                    alignItems: 'center', color: '#36554A', border: '1px solid #36554A',
                                    borderRadius: '3px'}}>
                            <AiFillSave />
                            Save</button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default BasicInfoEdit;