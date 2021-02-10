import React from 'react'
import SignIn from "../../signIn/SignIn"
import SignUp from "../../signup/SignUp"
import './signinsignup.css'

const SiginSignup = () => {
    return (
        <div className="sign-up-sign-in">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SiginSignup
