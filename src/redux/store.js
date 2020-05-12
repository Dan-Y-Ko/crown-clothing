import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

/*
I prefer using redux dev tools (chrome extension) so 
I am setting that up here. This is optional. If you 
prefer redux dev tools, go ahead and copy this as well
*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//----------------------------------------------------------------------------------

const middlewares = [logger];

// compose enhancers is optional for redux dev tools
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
