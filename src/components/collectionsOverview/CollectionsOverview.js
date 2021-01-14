import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../redux/shop/ShopSelector'
import CollectionPreview from "../collectionpreview/CollectionPreview"
import './collectionsoverview.css'

const CollectionsOverview = ({collections}) => {
    const collectionsArray = collections.length ? (
        collections.map(({id, ...CollectionsProps}) => (
          <CollectionPreview key={id} {...CollectionsProps} />
        ))
      ) : (
        <div>Loading collections...</div>
      )
    return (
        <div className="collections-overview">
            {collectionsArray}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
