import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import persistConfig from "config/persist";
import tickets from "./tickets";

const store = configureStore({
  reducer: persistReducer(persistConfig, combineReducers({ tickets })),
});

export type State = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
