import React from "react";
import CusttomButton from "../customButton/CusttomButton";
import "./collectionitems.css";
import { connect } from "react-redux"
import { addItem } from "../redux/cart/CartAction"

const CollectionItems = ({ item, addItem }) => {
  const { name, price, imageUrl, } = item
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage:`url(${imageUrl})`}} />
          <div className="collection-footer">
              <span className="name">{name}</span>
              <span className="price">{price}</span>
              <CusttomButton onClick={() => addItem(item)} inverted>Add to Cart</CusttomButton>
          </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItems);
