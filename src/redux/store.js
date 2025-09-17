// store.js
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import courseReducer from "./features/courseSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    course: courseReducer,
    user: userReducer,
  },
});

export default store;
