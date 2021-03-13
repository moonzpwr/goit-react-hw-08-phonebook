import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';
import authreducer from './auth/auth-reduser'
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}),
  logger
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']

}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authreducer),
  contacts: phonebookReducer
})


const store = configureStore({
    reducer: rootReducer,
    middleware: middleware,
    devTools: process.env.NODE_ENV === 'development'
});

const persistor = persistStore(store);

const exportStore = {store, persistor}
export default exportStore;