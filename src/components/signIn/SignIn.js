import React from 'react'
import CusttomButton from '../customButton/CusttomButton'
import FormInput from "../formInput/FormInput"
import "./signin.css"

// we dont need to call the library from firebase utils no more import { auth,  signInWithGoogle} from "../../firebase/FirebaseUtils"
import { connect } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../redux/user/UserAction'
// import CountApp from './CountApp'


const SignIn = (props) => {

    const { googleSignInStart } = props

    const [formInput,setFormInput] = React.useState({
            email:'', password:'' })

    const {email, password} = formInput

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {emailSignInStart} = props
        emailSignInStart(email, password)
        
        setFormInput({ email:'', password:'' })


        // no more setState(or update state) Redux will do that for us
        // try {
        //     await auth.signInWithEmailAndPassword(email,password)
        //     setFormInput({email:'', password:''})
        // } catch (error) {
        //     console.log(error)
        // }
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormInput({[name]:value})
        // console.log(setFormInput);
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

                <div className="button">
                <CusttomButton type="submit">SIGN IN</CusttomButton> {' '}
                <CusttomButton type='button' onClick={googleSignInStart} isGoogleSignIn>SIGN IN with Google</CusttomButton>
                </div>
            </form>
            {/* <CountApp /> */}
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
 
export default connect(null, mapDispatchToProps)(SignIn)