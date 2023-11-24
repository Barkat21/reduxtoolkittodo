import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import inputReducer from "../features/todo/inputSlice";

export const store = configureStore({
  reducer: todoReducer,
  reducer1: inputReducer,
});
