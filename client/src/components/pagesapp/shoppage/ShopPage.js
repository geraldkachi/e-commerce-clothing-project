import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

// import { createStructuredSelector} from "reselect"
// import {selectIsCollectionFetching,selectCollectionsLoading } from "../../redux/shop/ShopSelector"
// import { firestore, covertCollectionsSnapshotToMap } from "../../../firebase/FirebaseUtils";
// import { updateCollections } from "../../redux/shop/ShopAction";
// import WithSpinner from "../withspinner/WithSpinner";
// import CollectionPage from "../category/CollectionPage";

import { fetchCollectionsStart } from "../../redux/shop/ShopAction";
import CollectionOverviewContainer from "../../collectionsOverview/collectionOverviewContainer";
import CollectionPageContainer from "../category/CollectionContainer";

// const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
// const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ fetchCollectionsStart, match }) => {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //      loading: true
  //   }
  // }

  // unsubscribeFromSnapshot = null

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props
  //   fetchCollectionsStart()
  // }

  // => this logic was move to the shopAction
  // componentDidMount() {
  //   const {updateCollections} = this.props
  //   const collectionRef = firestore.collection('collections')

  //     // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot  => {

  //     collectionRef.get().then(snapshot  => {
  //         const collectionsMap = covertCollectionsSnapshotToMap(snapshot)
  //         updateCollections(collectionsMap);
  //         this.state({loading: false})
  //       })
  // }

  //  const { match } = this.props

  //  const {loading} = this.state

  return (
    <div className="shop-page">
      {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
      {/* <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} /> */}
      {/* <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} /> */}
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
    </div>
  )
}

// const mapStateToProps = createStructuredSelector({
//   // isCollectionFetching: selectIsCollectionFetching,
//   isCollectionLoaded: selectCollectionsLoading
// })

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

// const mapStateToProps = (dispatch) => ({
//   updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
// })

export default connect(
  null,
  // mapStateToProps,
  mapDispatchToProps
)(ShopPage);

// growing up together is what makes a strong family
