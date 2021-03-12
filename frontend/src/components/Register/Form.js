import React, { useState } from 'react'
import RegisterForm from './RegisterForm'
import Success from './Success'
import "./Form.css"

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm(){
        setIsSubmitted(true)
    }
    return (
        <>
        <div className = "form-container">
            <span className = "close-btn">x</span>
            <div className = "form-content-left">
                <img src="img/img-2.jpg" className="form-img"/>
            </div>
            {!isSubmitted ? (<RegisterForm submitForm=
            {submitForm} /> ): (<Success />)}
        
        </div> 
        </>
    );
};

export default Form;
