import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistConfig from 'config/persist';
import createSagaMiddleware from 'redux-saga';
import tickets from './tickets';
import ticketSagas from './tickets/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistReducer(persistConfig, combineReducers({ tickets })),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([sagaMiddleware]),
});

sagaMiddleware.run(ticketSagas);

export type State = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
