import {signOut} from "firebase/auth";
import {auth} from "../firebase";
import {AppRoutes} from "../common/Routes";

export const signOutUser = async (callback) => {
    try{
        const res = await signOut(auth)
        localStorage.setItem('auth', JSON.stringify({}))
        callback(AppRoutes.home)

    } catch (e){
        console.log(e);
    }
}

export const setFormData = (value, key, callback) => {
    callback((prevState)=>{
        return{
            ...prevState,
            [key]: value,
        }
    });
};

export const authUser = () =>  JSON.parse(localStorage.getItem('auth'))
