import React from "react";
import "./collectionpreview.css";
import CollectionItems from "../collectionItem/CollectionItems";
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from "./CollectionPreviewStyled";

const CollectionPreview = ({ title, items }) => {
  const itemarray = items.length ? (
    items
      .filter((item, idx) => idx < 4)
      .map(item  => <CollectionItems key={item.id} item={item} />)
  ) : (
    <div>Loading...</div>
  );
  
  return (
    <CollectionPreviewContainer className="collection-preview">
      <TitleContainer className="title">{title.toUpperCase()}</TitleContainer>
      <PreviewContainer className="preview">{itemarray}</PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;

// create
// console.developers.google.com