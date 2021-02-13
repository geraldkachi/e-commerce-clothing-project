import React from 'react'
import { CustomButtonContainer } from './CustomButtonStyled'

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props} >
        {children}
    </CustomButtonContainer>
)

export default CustomButton







// import React from 'react'
// import "./custombutton.css"

// const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
//     <button className={`${inverted ? ('inverted') : ('')} ${isGoogleSignIn ? ('google-sign-in') : ('')} custom-button`} {...otherProps} >
//         {children}
//     </button>
// )

// export default CustomButton
