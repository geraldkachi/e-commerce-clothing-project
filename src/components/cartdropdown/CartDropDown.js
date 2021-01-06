import React from 'react'
import CusttomButton from '../customButton/CusttomButton'
import "./cartdropdown.css"


const CartDropDown = () => {
    return (
        <div className="cart-dropdown">
           <div className="cart-item">
           <CusttomButton>GO TO CHECKOUT</CusttomButton>
           </div>
        </div>
    )
}

export default CartDropDown
