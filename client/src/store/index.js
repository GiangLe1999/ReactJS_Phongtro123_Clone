import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

// Config chung cho Redux persist của cả 2 reducer
const commonConfig = { storage, stateReconciler: autoMergeLevel2 };

// Config riêng cho Redux persist của cả authReducer
const authConfig = {
  ...commonConfig,
  key: "auth",
  //   Whitelist sẽ chọn ra các state của authReducer cần được persist
  // Ngược lại là blacklist sẽ chọn ra các state mà ta không muốn persist
  whitelist: ["isLoggedin", "token"],
};

// Combine 2 reducer
const persistedReducer = combineReducers({
  user: userReducer,
  //   Áp dụng redux persist lên authReducer
  auth: persistReducer(authConfig, authReducer),
});

// Tạo store và export ra
const store = configureStore({
  reducer: persistedReducer,
  //   Tắt cảnh báo đỏ trên Dev tools
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
