import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: JSON.parse(localStorage.getItem("login")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.login = action.payload;
      localStorage.setItem("login", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.login = null;
      localStorage.removeItem("login");
    },
  },
});



// ✅ CORRECT:
export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
