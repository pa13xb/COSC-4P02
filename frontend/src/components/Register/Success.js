import React from 'react'

/*This function displays an image if sign up is successful */
const Success = () => {
    return(
        <div className="form-content-right">
            <div className="form-success">
                Your account has been created! Now you can browse recipes or create some of your own!
            </div>
            <img src='img/img-4.svg' className='form-img-2' />        
        </div>
    )
}

export default Success