import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "../slices/booksSlice";
import { categoriesReducer } from "../slices/categoriesSlice";
import userReducer from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    books: booksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
