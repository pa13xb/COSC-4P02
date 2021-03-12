/* This function checks that input into sign up is valid input */

function ValidateForm(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Username required"
    }

    if(!values.email){
        errors.email = "Email required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Invalid email address"
    }

    if(!values.password){
        errors.password = "Password required"
    } else if (values.password.length < 4){
        errors.password = "Password should be 4 characters or more"
    }

    if(!values.confirmpw){
        errors.confirmpw = "Password required"
    } 
    else if(values.confirmpw !== values.password){
        errors.confirmpw = "Passwords do not match"
    }
    return errors
}

export default ValidateForm;