import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serviceApi } from "../../service/service";
import { BooksProps, RatingProps } from "../../types/interfaces";

export type InitialStateType = {
  books: Array<BooksProps>;
  loading: boolean;
  error: boolean;
  sortByRatingTop: boolean;
  onLastPage: boolean;
};

const initialState: InitialStateType = {
  books: [],
  loading: false,
  error: false,
  sortByRatingTop: true,
  onLastPage: false
};

const getTopRating = (a: RatingProps, b: RatingProps) => {
  return a.rating < b.rating ? 1 : -1;
};

const getLowRating = (a: RatingProps, b: RatingProps) => {
  return a.rating > b.rating ? 1 : -1;
};

export const getBooks = createAsyncThunk<BooksProps[], number>(
  "books/getBooks",
  async (pageNumber, { rejectWithValue }) => {
    try {
      const response = await serviceApi.get(
        `/books?completed=false&page=${pageNumber}&limit=8`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    ratingFilter: (state, { payload }) => {
      state.sortByRatingTop = payload;
      state.books = state.books.sort((a, b) =>
        payload ? getTopRating(a, b) : getLowRating(a, b)
      );
    },
    closeBooksError: (state) => {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        if (payload.length !== 8) {
          state.onLastPage = true;
        }
        state.books = [...state.books, ...payload].sort((a, b) => getTopRating(a, b));
        state.loading = false;
      })
      .addCase(getBooks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { ratingFilter, closeBooksError } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
