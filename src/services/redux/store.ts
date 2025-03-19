import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/services/redux/slice/authSlice";
import postReducer from "@/services/redux/slice/postSlice";
import reportReducer from "@/services/redux/slice/reportSlice";
import userReducer from "@/services/redux/slice/userSlice";
import planReducer from "@/services/redux/slice/planSlice";
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
  report: reportReducer,
  user: userReducer,
  plan: planReducer,
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
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export let persistor = persistStore(store)
