


export const setFormData = (value, key, callback) => {
    callback((prevState)=>{
        return{
            ...prevState,
            [key]: value,
        }
    });
};