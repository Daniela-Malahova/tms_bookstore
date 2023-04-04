import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageItem = (item: string) => {
  return localStorage.getItem(item);
};

const initialState = {
  email: null,
  token: null,
  id: null,
  error: false,
  isLoading: false,
  isAuth: !!getLocalStorageItem("userToken"),
  isResetEmail: false,
  isChangedPassword: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.error = false;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
    setError(state) {
      state.error = true;
    },
    removeError(state) {
      state.error = false;
    },
    setIsStartLoaging(state) {
      state.isLoading = true;
    },
    setIsStopLoaging(state) {
      state.isLoading = false;
    },
    setIsAuth(state) {
      state.isAuth = true;
    },
    setIsResetEmail(state) {
      state.error = false;
      state.isResetEmail = true;
      state.isChangedPassword = false;
    },
    setIsChangePassword(state) {
      state.error = false;
      state.isChangedPassword = true;
      state.isResetEmail = false;
    },
  },
});

export const {
  setUser,
  removeUser,
  setError,
  removeError,
  setIsStartLoaging,
  setIsStopLoaging,
  setIsAuth,
  setIsResetEmail,
  setIsChangePassword,
} = userSlice.actions;

export default userSlice.reducer;
