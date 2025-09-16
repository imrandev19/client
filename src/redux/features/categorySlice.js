import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: localStorage.getItem("currentCategory") 
    ? JSON.parse(localStorage.getItem("currentCategory"))
    : null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
      localStorage.setItem("currentCategory", JSON.stringify(action.payload));
    },
    clearCategory: (state) => {
      state.currentCategory = null;
      localStorage.removeItem("currentCategory");
    },
  },
});

export const { setCategory, clearCategory } = categorySlice.actions;
export default categorySlice.reducer;
