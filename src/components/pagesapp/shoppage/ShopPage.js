import React from "react";

import { Route } from "react-router-dom";
import CollectionPage from "../category/CollectionPage";
import { createStructuredSelector} from "reselect"
import {
  // selectIsCollectionFetching,
  selectCollectionsLoading } from "../../redux/shop/ShopSelector"
// import { firestore, covertCollectionsSnapshotToMap } from "../../../firebase/FirebaseUtils";
import { connect } from "react-redux";
// import { updateCollections } from "../../redux/shop/ShopAction";
import WithSpinner from "../withspinner/WithSpinner";
import { fetchCollectionsStartAsync } from "../../redux/shop/ShopAction";
import CollectionOverviewContainer  from '../../collectionsOverview/collectionOverviewContainer'


// const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      loading: true
  //   }
  // }
  
  // unsubscribeFromSnapshot = null
 


  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

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

 render () {
   const { match, isCollectionLoaded } = this.props

  //  const {loading} = this.state

  return (
    <div className="shop-page">
      {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
      {/* <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} /> */}
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
      <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
    </div>
  );
 }
};

const mapStateToProps = createStructuredSelector({
  // isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectCollectionsLoading
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


// const mapStateToProps = (dispatch) => ({
//   updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
// })

export default connect(
  // null, 
  mapStateToProps,mapDispatchToProps)(ShopPage);
