import React from "react";
import "./collectionpreview.css";
import CollectionItems from "../collectionItem/CollectionItems";

const CollectionPreview = ({ title, items }) => {
  const itemarray = items.length ? (
    items
      .filter((item, idx) => idx < 4)
      .map(({ id, ...itemProps }) => (
        <CollectionItems key={id} {...itemProps} />
      ))
  ) : (
    <div>No item</div>
  );
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{itemarray}</div>
    </div>
  );
};

export default CollectionPreview;
