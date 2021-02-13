import React from "react"
import { CartItemContainer, CartItemImage, ItemDetailsContainer } from "./CartItemStyled";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer >
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <div className="name">{name}</div>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
