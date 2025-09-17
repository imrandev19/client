// store.js
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import courseReducer from "./features/courseSlice";
export const store = configureStore({
  reducer: {
    category: categoryReducer,
    course: courseReducer,
  },
});

export default store;
