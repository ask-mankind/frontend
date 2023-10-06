import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { getAuthToken, getAuthUser } from "../utils/authentication";
import { toast } from "react-toastify";
const initialState = {
  status: null,
  user: null, // Store the authenticated user
  error: null,
};

const token = getAuthToken()
const config = {
  headers: {
    'Authorization': `Bearer ${token}`,
  },
};

// Create a new async thunk action to handle user login
export const updateUser = createAsyncThunk('users/updateUser', async (userData) => {
  try {
    console.log(userData)
    const response = await axios.put('http://localhost:5000/api/users/update', userData,config);
    const data = await response.data
    localStorage.removeItem("ahkUser")
    localStorage.setItem("ahkUser",JSON.stringify(userData))
    return data; // Assuming the response contains user data after login
  } catch (error) {
    console.log(error);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log(state.user)
        toast.success("User updated succesfully")
      })
      .addCase(updateUser.rejected, (state, action) => {
        const message = action.payload.message
        toast.error(message)
      });
  },
});

export default usersSlice.reducer;
