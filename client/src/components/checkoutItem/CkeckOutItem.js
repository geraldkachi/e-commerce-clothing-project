import React from 'react'
import "./checkoutitem.css"
import {connect} from "react-redux"
import styled from "styled-components"

import{ clearItemFromCart, addItem, removeItem } from "../redux/cart/CartAction"
import { CheckoutItemContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from './CheckOutItemStyled'


const CkeckOutItem = ({cartItem, clearItem, addItem, removeItem }) => {

    const {name, imageUrl,price, quantity} = cartItem
    return (
        <CheckoutItemContainer className="checkout-item">
            <ImageContainer>
                <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={()=> removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={()=> addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer className="remove-button" onClick={()=> clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
        
        // UTF-8 Dingbats   read about it
        // <div className="remove-button">&#9994;</div>
        // <div className="remove-button">&#10010;</div>

    )
}

 const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const mapDispatchToProps = dispatch => ({
    clearItem: item  => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
}) 

export default connect(null,mapDispatchToProps)(CkeckOutItem)
