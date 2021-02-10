import React from "react";
import "./collectionpreview.css";
import CollectionItems from "../collectionItem/CollectionItems";

const CollectionPreview = ({ title, items }) => {
  const itemarray = items.length ? (
    items
      .filter((item, idx) => idx < 4)
      .map(item  => <CollectionItems key={item.id} item={item} />)
  ) : (
    <div>Loading...</div>
  );
  
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{itemarray}</div>
    </div>
  );
};

export default CollectionPreview;

// create
// console.developers.google.com