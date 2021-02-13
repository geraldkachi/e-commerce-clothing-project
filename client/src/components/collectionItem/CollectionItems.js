import React from "react";
// import CustomButton from "../customButton/CustomButton";
import "./collectionitems.css";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/CartAction";
import { CollectionItemContainer, AddButton , CollectionFooterContainer, NameContainer, PriceContainer} from "./CollectionItemStyled";

const CollectionItems = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooterContainer className="collection-footer">
        <NameContainer className="name">{name}</NameContainer>
        <PriceContainer className="price">{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)), 
});

export default connect(null, mapDispatchToProps)(CollectionItems);
