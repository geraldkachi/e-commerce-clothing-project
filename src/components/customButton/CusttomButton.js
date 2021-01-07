import React from 'react'
import "./custombutton.css"

const CusttomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${inverted ? ('inverted') : ('')} ${isGoogleSignIn ? ('google-sign-in') : ('')} custom-button`} {...otherProps} >
        {children}
    </button>
)

export default CusttomButton
