import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);  

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections], 
    // collections =>  collections[collectionUrlParam]
    collections => collections ? collections[collectionUrlParam] : null

        // (collections) =>
        // collections.find(
        // (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        // )
  )

  export const selectorCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
  )

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching 
)

export const selectCollectionsLoading = createSelector(
  [selectShop],
  shop => !!shop.collections
)

// !! is claaed the double bang. its for converting a value to to trues or falsey value





 


// 0.1  when you a find() fro the collections item... it iterates lowly from left to right and it not good for performance bases on this applications  and not in all cases

//  very important so take notes
// 0.2  to create a new selector that will convert an object {} to an array [].. by using Object.keys




// import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

// export const selectCollection = (collectionUrlParam) =>
//   createSelector(
//     [selectCollections ], 
//     (collections) =>
//         collections.find(
//         (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//         )
//   );

// const selectShop = (state) => state.shop;

// export const selectCollections = createSelector(
//   [selectShop],
//   (shop) => shop.collections
// );
