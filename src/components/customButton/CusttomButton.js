import React from 'react'
import "./custombutton.css"

const CusttomButton = ({children, isGoogleSignIn , ...otherProps}) => (
    <button className={`${isGoogleSignIn ? ('google-sign-in') : ('')} custom-button`} {...otherProps} >
        {children}
    </button>
)

export default CusttomButton
