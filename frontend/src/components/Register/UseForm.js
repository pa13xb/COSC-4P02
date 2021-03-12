import {useState, useEffect} from 'react'
import ValidateForm from "./ValidateForm";

/* This function allows users to enter information into the text field on sign up form */

const UseForm = (callback, ValidateForm) => {
    const[values, setValues] = useState({
    username: '', email: '', password: '', confirmpw: ''})

    const[errors, setErrors] = useState({})

    const[isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const{name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(ValidateForm(values))

        setIsSubmitting(true);
    };

    useEffect( 
        () => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
            }
        }, [errors]);
    

    return {handleChange, values, handleSubmit, errors}
}


export default UseForm