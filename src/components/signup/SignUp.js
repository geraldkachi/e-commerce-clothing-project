import React from 'react'
import "./signup.css"
import FormInput from "../formInput/FormInput"
import CusttomButton from "../customButton/CusttomButton"

import {auth,createUserProfileDocument} from "../../firebase/FirebaseUtils"

class SignUp extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayName:'',
             email:'',
             password:'',
             confirmPassword:''
        }
    }
    hanleSubmit = async (e) => {
        e.preventDefault()
        const {displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})

            this.setState({
             displayName:'',
             email:'',
             password:'',
             confirmPassword:''
            })

        } catch (error) {
            console.error(error)
        }
    }
    handleChange = (e) => {
        const { name, value} =  e.target
            this.setState({[name]: value})

    }
    
    render(){
        const {displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                    />  
                  
                    <FormInput 
                    type="emal"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                    />
                  
                    <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                    />
                  
                    <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required
                    />

                    <CusttomButton type="submit">
                        SIGN Up
                    </CusttomButton>
                </form>
            </div>
        )
    }
}

export default SignUp
