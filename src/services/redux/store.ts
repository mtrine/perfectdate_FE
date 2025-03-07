import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/services/redux/slice/authSlice";
import postReducer from "@/services/redux/slice/postSlice";
import reportReducer from "@/services/redux/slice/reportSlice";

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
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['auth'],
}
const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  report:reportReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export let persistor = persistStore(store)
