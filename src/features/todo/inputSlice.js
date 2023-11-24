import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

export const inputSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { setInput } = inputSlice.actions;

export default inputSlice.reducer;
