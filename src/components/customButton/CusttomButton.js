import React from 'react'
import "./custombutton.css"

const CusttomButton = ({children, ...otherProps}) => (
    <button className="custom-button" {...otherProps} >
        {children}
    </button>
)

export default CusttomButton
