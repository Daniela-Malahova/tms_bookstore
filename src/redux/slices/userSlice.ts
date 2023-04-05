import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import {
  InitialStateUserSliceProps,
  LoginCredsProps,
  SignInCredsProps,
} from "../../types/interfaces";

const getLocalStorageItem = (item: string) => {
  return localStorage.getItem(item);
};

const initialState: InitialStateUserSliceProps = {
  email: null,
  token: null,
  id: null,
  error: false,
  isLoading: false,
  isAuth: !!getLocalStorageItem("userToken"),
  isNewUserRegistred: false,
  isResetEmail: false,
  isChangedPassword: false,
};

export const logIn = createAsyncThunk(
  "user/logIn",
  async (cred: LoginCredsProps, { rejectWithValue }) => {
    const auth = getAuth();
    const { email, password } = cred;
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const userData = {
        refreshToken: response.user.refreshToken,
        userName: response.user.displayName,
        email: response.user.email,
      };
      return userData;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async (cred: SignInCredsProps, { rejectWithValue }) => {
    const auth = getAuth();
    const { email, password, userName, lastName } = cred;
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        ({ user }) => {
          updateProfile(user, {
            displayName: `${userName} ${lastName}`,
          });
        }
      );
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const passwordRecovery = createAsyncThunk(
  "user/passwordRecovery",
  async (email: string, { rejectWithValue }) => {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  (password: string, { rejectWithValue }) => {
    const auth = getAuth();
    try {
      onAuthStateChanged(auth, (user) => {
        if (user && auth.currentUser) {
          updatePassword(auth.currentUser, password);
        }
      });
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeError(state) {
      state.error = false;
    },
    setIsNewUserRegistred(state) {
      state.isNewUserRegistred = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        localStorage.setItem("userToken", payload.refreshToken);
      })
      .addCase(logIn.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(signIn.fulfilled, (state) => {
        state.isLoading = false;
        state.isNewUserRegistred = true;
      })
      .addCase(signIn.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(passwordRecovery.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(passwordRecovery.fulfilled, (state) => {
        state.isLoading = false;
        state.isResetEmail = true;
        state.isChangedPassword = false;
      })
      .addCase(passwordRecovery.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(changePassword.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.isLoading = false;
        state.isChangedPassword = true;
        state.isResetEmail = false;
      })
      .addCase(changePassword.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const { removeError, setIsNewUserRegistred } = userSlice.actions;

export default userSlice.reducer;
