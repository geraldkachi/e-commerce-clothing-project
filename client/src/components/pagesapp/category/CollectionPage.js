import React from "react";
import { connect } from "react-redux";
import CollectionItems from "../../collectionItem/CollectionItems";
import { selectCollection } from "../../redux/shop/ShopSelector";
import "./collection.css";

const CollectionPage = ({ collection }) => {
  // console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item) => (
          <CollectionItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

  export default connect(mapStateToProps)(CollectionPage);
