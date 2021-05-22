import { configureStore } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { AnyAction, Reducer } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";

import appReducer from "./reducers/index";

const store = configureStore({ reducer: appReducer, middleware: [thunk] });

export default store;

export type AppDispatch = Dispatch<AnyAction | AppThunk>;
export type RootState = ReturnType<typeof store.getState>;
export type AppReducer<T> = Reducer<T, AnyAction>;
export type AppThunk<T = void> = ThunkAction<T, RootState, unknown, AnyAction>;
