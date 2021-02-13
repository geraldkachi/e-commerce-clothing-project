import React, { useState } from "react";
import "./signup.css";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { connect } from "react-redux";
import { signUpSatrt } from "../redux/user/UserAction";

// import {auth,createUserProfileDocument} from "../../firebase/FirebaseUtils"

const SignUp = ({ signUpSatrt }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpSatrt({ displayName, email, password });
    // try {

    //     await createUserProfileDocument(user, {displayName})

    //     this.setState({
    //      displayName:'',
    //      email:'',
    //      password:'',
    //      confirmPassword:''
    //     })

    // } catch (error) {
    //     console.error(error)
    // }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          placeholder="Display Name"
          required
        />

        <FormInput
          type="emal"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />

        <CustomButton type="submit">SIGN Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToPerops = (dispatch) => ({
  signUpSatrt: (userCredentials) => dispatch(signUpSatrt(userCredentials)),
});

export default connect(null, mapDispatchToPerops)(SignUp);

// https://bennettfeely.com/
