import React from 'react'
import "./checkoutitem.css"

const CkeckOutItem = ({cartItem: {name, imageUrl,price, quantity} }) => {

    // const {name, imageUrl,price, quantity} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
        
        // UTF-8 Dingbats   read about it
        // <div className="remove-button">&#9994;</div>
        // <div className="remove-button">&#10010;</div>

    )
}

export default CkeckOutItem
