import React from "react";
import CollectionsOverview from "../../collectionsOverview/CollectionsOverview";

import { Route } from "react-router-dom";
import CollectionPage from "../category/CollectionPage";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
