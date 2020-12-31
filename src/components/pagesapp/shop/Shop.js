import React, { Component } from "react";
import CollectionPreview from "../../collectionpreview/CollectionPreview";
import ShopData from "./ShopData";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData,
    };
  }
 
  render() {
    const { collections } = this.state;

    const collectionsArray = collections.length ? (
      collections.map(({id, ...CollectionsProps}) => (
        <CollectionPreview key={id} {...CollectionsProps} />
      ))
    ) : (
      <div>No collections</div>
    )
    return <div className="shop-page">{collectionsArray}</div>;
  }
}

export default Shop;
