import React from 'react'
import './collectionpreview.css'

const CollectionPreview = ({title, items}) => {

    const itemarray = items.length ? (
        items.map(item => (
            <div key={item.id}>{item.name}</div>
        ))
    ) : (
        <div>No item</div>
    )
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                <div>{itemarray}</div>
            </div>
        </div>
    )
}

export default CollectionPreview
