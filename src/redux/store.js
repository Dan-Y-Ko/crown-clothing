import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { fetchCollectionsStart } from "./shop/shop.sagas";

import rootReducer from "./root-reducer";

/*
I prefer using redux dev tools (chrome extension) so 
I am setting that up here. This is optional. If you 
prefer redux dev tools, go ahead and copy this as well
*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//----------------------------------------------------------------------------------

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// compose enhancers is optional for redux dev tools
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

// export default { store, persistor }; <- No idea why this is here
