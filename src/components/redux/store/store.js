import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist"

import RootReducer from "../RootReducer";

const middlewares = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)

// export default {store, persistor};

///////////////////////////////////////////////////



// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

// import RootReducer from "../RootReducer";

// const middlewares = [logger];

// const store = createStore(RootReducer, applyMiddleware(...middlewares));

// export default store;