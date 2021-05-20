import { createStore, applyMiddleware, compose, AnyAction } from "redux";
import thunk from "redux-thunk";

import appReducer from "./reducers/index";

const middleware = [thunk];
const composeArguments = [applyMiddleware(...middleware)];

const store = createStore(appReducer, compose(...composeArguments));

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Reducer<T> = (state: T, action: AnyAction) => T;
