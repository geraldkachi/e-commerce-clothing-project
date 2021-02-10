import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../redux/shop/ShopSelector";
import CollectionOverview from "./CollectionsOverview";
import WithSpinner from "../pagesapp/withspinner/WithSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

 const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

// without the compose fro redux... this containers the nested components
// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))


export default CollectionOverviewContainer
