import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serviceApi } from "../../service/service";
import { CategoriesProps } from "../../types/interfaces";

export type InitialStateType = {
  categories: Array<CategoriesProps>;
  loading: boolean;
  error: string | null | unknown;
};

const initialState: InitialStateType = {
  categories: [],
  loading: false,
  error: null,
};

export const getCategories = createAsyncThunk<Array<CategoriesProps>, void>(
  "categories/getCategories",
  async function (_, { rejectWithValue }) {
    try {
      const responce = await serviceApi.get("/categories");
      return responce.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { addPosts } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
