import React from 'react'
import "./checkoutitem.css"
import {connect} from "react-redux"

import{ clearItemFromCart, addItem, removeItem } from "../redux/cart/CartAction"

const CkeckOutItem = ({cartItem, clearItem, addItem, removeItem }) => {

    const {name, imageUrl,price, quantity} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow pr-3" onClick={()=> removeItem(cartItem)}>&#10094;</span>
                {quantity}
                <span className="arrow pl-3" onClick={()=> addItem(cartItem)}>&#10095;</span>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=> clearItem(cartItem)}>&#10005;</div>
        </div>
        
        // UTF-8 Dingbats   read about it
        // <div className="remove-button">&#9994;</div>
        // <div className="remove-button">&#10010;</div>

    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item  => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
}) 

export default connect(null,mapDispatchToProps)(CkeckOutItem)
