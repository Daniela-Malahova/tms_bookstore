import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serviceApiBook } from "../../service/service";
import { BookProps, CommentsProps } from "../../types/interfaces";

interface InitialStateType {
  book: BookProps;
  loading: boolean;
  error: boolean;
}

const initialState: InitialStateType = {
  book: {
    title: "",
    rating: null,
    issueYear: "",
    description: "",
    publish: "",
    pages: "",
    cover: "",
    weight: "",
    format: "",
    ISBN: "",
    producer: "",
    authors: [""],
    images: null,
    categories: [""],
    comments: null,
  },
  loading: false,
  error: false,
};

export const getBook = createAsyncThunk<BookProps, string>(
  "book/getBook",
  async (bookId, { rejectWithValue }) => {
    try {
      const response = await serviceApiBook.get(`/book/${bookId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const putComment = createAsyncThunk<any, CommentsProps, { state: any }>(
  "book/putComment",
  async (newComment, { rejectWithValue, getState }) => {
    const book = getState().book.book;
    const comments = getState().book.book.comments;
    try {
      await serviceApiBook.put(`/book/${book.id}`, {
        comments: [...comments, newComment],
      });

      return newComment;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    clearBook: (state) => {
      state.book = {
        title: "",
        rating: null,
        issueYear: "",
        description: "",
        publish: "",
        pages: "",
        cover: "",
        weight: "",
        format: "",
        ISBN: "",
        producer: "",
        authors: [""],
        images: null,
        categories: [""],
        comments: null,
      };
    },
    closeBookError: (state) => {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getBook.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.book = payload;
      })
      .addCase(getBook.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(putComment.pending, (state) => {
        state.error = false;
      })
      .addCase(putComment.fulfilled, (state, { payload }) => {
        state.book.comments?.push(payload);
      })
      .addCase(putComment.rejected, (state) => {
        state.error = true;
      });
  },
});

export const { clearBook, closeBookError } = bookSlice.actions;

export const bookReducer = bookSlice.reducer;
