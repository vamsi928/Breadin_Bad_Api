import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
