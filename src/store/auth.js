import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
const initialState = {
  loginStatus: "stable",
  registerStatus: "stable",
  logoutStatus: null,
  user: null, // Store the authenticated user
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    try {
      console.log(userData);
      const response = await axios.post(
        "http://localhost:5000/api/users/",
        userData
      );
      console.log(response);
      const data = await response.data;
      return data;
    } catch (error) {
      throw error.message;
    }
  }
);

// Create a new async thunk action to handle user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        userData
      );
      const data = await response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }
);
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    const response = await axios.post("http://localhost:5000/api/users/logout");
    return response;
  } catch (error) {
    throw error;
  }
});

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoginStatus: (state, action) => {
      state.loginStatus = action.payload;
    },
    setRegisterStatus: (state, action) => {
      state.registerStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //login
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        const user = action.payload.user;
        const token = action.payload.token;
        localStorage.setItem("token", token);
        localStorage.setItem("ahkUser", JSON.stringify(user));
        state.loginStatus = "succeeded";
        toast.success("Logged in successfully.");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.error = action.error.message;
        console.log(action);
        toast.error("Username or password is incorrect");
      })

      //register
      .addCase(registerUser.pending, (state) => {
        state.registerStatus = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerStatus = "succeeded";
        console.log(action.payload.newUser);
        const user = action.payload.newUser;
        const token = action.payload.token;
        localStorage.setItem("token", token);
        localStorage.setItem("ahkUser", JSON.stringify(user));
        toast.success("Regisgered successfully.");
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerStatus = "failed";
        state.error = action.error.message;
        toast.error("Username or Email is already used");
      })

      //logout
      .addCase(logoutUser.pending, (state) => {
        state.logoutStatus = "loading";
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.logoutStatus = "succeeded";
        state.user = null;
        localStorage.removeItem("token");
        localStorage.removeItem("ahkUser");
        toast.warning("Logged out successfully.");
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.logoutStatus = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      });
  },
});

export const { setUser,setLoginStatus,setRegisterStatus } = auth.actions;
export default auth.reducer;
