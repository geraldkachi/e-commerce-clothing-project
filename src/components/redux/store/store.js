import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"
import logger from "redux-logger";
// import thunk from "redux-thunk"
 import createSagaMiddleware from 'redux-saga'

import RootReducer from "../RootReducer";

// import { fetcCollectionsStart } from "../shop/ShopSagas";

import { incrementSaga } from "../../signIn/CountAppSaga";
import RootSaga from "../RootSaga";

// we're replacingg thunk with redux-saga for async wait function a better way


const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];
// const middlewares = [thunk];
// const middlewares = [logger];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}

export const store = createStore(RootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(RootSaga, incrementSaga)

export const persistor = persistStore(store)


// export default {store, persistor};

///////////////////////////////////////////////////



// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

// import RootReducer from "../RootReducer";

// const middlewares = [logger];

// const store = createStore(RootReducer, applyMiddleware(...middlewares));

// export default store;