import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections], 
    collections => collections[collectionUrlParam]
        // (collections) =>
        // collections.find(
        // (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        // )
  );

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);












//  when you a find() fro the collections item... it iterates lowly from left to right and it not good for performance bases on this applications  and not in all cases

//  very important so take notes



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
