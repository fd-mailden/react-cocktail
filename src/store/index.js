import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import {cocktailsReducer}  from "./reducers/cocktailsReducer";
import {cartReducer}  from "./reducers/cartReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
  cart: cartReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
