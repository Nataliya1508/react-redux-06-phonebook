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
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
// import filterSlice from './filterSlice';
import { contactsSlice } from './slice';


const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

// const combineRedusers = combineReducers({
//     contacts: contactsSlice.reducer,
//     filter: filterSlice.reduser,
// });

const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
      reducer: {
    contacts: persistedReducer,
  },
    // reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);