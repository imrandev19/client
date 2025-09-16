// store.js
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
