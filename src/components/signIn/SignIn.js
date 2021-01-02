import React from 'react'
import CusttomButton from '../customButton/CusttomButton'
import FormInput from "../formInput/FormInput"
import "./signin.css"

import {signInWithGoogle} from "../../firebase/FirebaseUtils"


const SignIn = () => {
    const [formInput,setFormInput] = React.useState({
        email:'',
        password:''
    })
    const {email, password} = formInput

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormInput({
            email:'',
            password:''
        })
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormInput({[name]:value})
        console.log(setFormInput);
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email</span>

            <form onSubmit={handleSubmit}>

                <label>Email</label>
                <FormInput type="email" name="email" value={email} placeholder="Email" onChange={handleChange} required/>

                <label>Password</label>
                <FormInput type="password" name="password" value={password} placeholder="Password" onChange={handleChange} required/>

                <CusttomButton type="submit">SIGN IN</CusttomButton>
                <CusttomButton onClick={signInWithGoogle} >
                    SIGN IN with Google</CusttomButton>
            </form>
        </div>
    )
}

export default SignIn

