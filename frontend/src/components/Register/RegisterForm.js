import React from 'react'
import UseForm from "./UseForm"
import ValidateForm from "./ValidateForm"
import './Form.css'

/* This function creates the input text fields on the form for users to sign up */
const RegisterForm = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = UseForm(submitForm, ValidateForm);
    return(
        <div className= "form-content-right">
            <form className="form" onSubmit={handleSubmit}>
            <h1>Create your account below
            </h1>

            {/*USERNAME*/}
            <div className="form-inputs">
                <label htmlFor='username'
                className='form-label'>
                    Username
                </label>
                <input
                    id='username' type = 'text' name = 'username' className= 'form-input' placeholder = "Enter your username" 
                    value = {values.username}
                    onChange = {handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
            </div>

            {/*EMAIL*/}
            <div className="form-inputs">
                <label htmlFor='email'
                className='form-label'>
                    Email
                </label>
                <input
                    id = 'email'type = 'email' name = 'email' className= 'form-input' placeholder = "Enter your email"
                    value = {values.email}
                    onChange = {handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
            </div>

            {/*PASSWORD*/}
            <div className="form-inputs">
                <label htmlFor='password'
                className='form-label'>
                    Password
                </label>
                <input
                    id = 'password' type = 'password' name = 'password' className= 'form-input' placeholder = "Enter your password"
                    value = {values.password}
                    onChange = {handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
            </div>

            {/*CONFIRM PASSWORD*/}
            <div className="form-inputs">
                <label htmlFor='confirmpw'
                className='form-label'>
                    Confirm Password
                </label>
                <input
                    id = 'confirmpw' type = 'password' name = 'confirmpw' className= 'form-input' placeholder = "Confirm your password"
                    value = {values.password2}
                    onChange = {handleChange}
                    />
                    {errors.confirmpw && <p>{errors.confirmpw}</p>}
            </div>

            {/*SIGN UP BUTTON*/}
            <button className='sign-up-btn'
            type='submit'>
                Sign Up
            </button>
            </form>
        </div>
    )
}
export default RegisterForm;