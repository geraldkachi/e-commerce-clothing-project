import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import WithSpinner from "../withspinner/WithSpinner";
import { selectIsCollectionFetching } from "../../redux/shop/ShopSelector";
import CollectionPage from "./CollectionPage";


const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionFetching(state) 
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer

// do not cheaT myself the oppunutiy to have a happy and  healty relationship