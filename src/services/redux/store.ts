// store.ts
import { configureStore } from '@reduxjs/toolkit';
import postReducer from '@/services/redux/slice/postSlice'
import authReducer from '@/services/redux/slice/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      post: postReducer, // Khi mà khai báo slice xong phải khai báo vô đây hqua mtri quên nên nó có lỗi trên
      auth: authReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];