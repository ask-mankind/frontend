import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAuthToken } from '../utils/authentication';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logoutUser } from './auth';
import { redirect } from 'react-router-dom';

const token = getAuthToken()
const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };

  export const likeEntry = createAsyncThunk('likes/likeEntry', async (entryId) => {
    try {
        console.log("liked")
      const response = await axios.post(`http://localhost:5000/api/entries/${entryId}/like`,{entryId:entryId},config);
      return response.data;
    } catch (error) {
        if(error.response.data.error==="Unauthorized")
        toast.error("Session Expired. You Have To Login Again")
    }
  });
  export const unLikeEntry = createAsyncThunk('likes/likeEntry', async (entryId) => {
    try {
        console.log("unliked")
      const response = await axios.post(`http://localhost:5000/api/entries/${entryId}/unlike`,{entryId:entryId},config);
      return response.data;
    } catch (error) {
      if(error.response.data.error==="Unauthorized")
      toast.error("Session Expired. You Have To Login Again")
  }
  });
  export const getLikesFromEntry = createAsyncThunk('likes/getLikesFromEntry', async (entryId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/entries/${entryId}/likes`,{entryId:entryId});

      const data = await response.data
      return data
    } catch (error) {
      if(error.response.data.error==="Unauthorized")
      toast.error("Session Expired. You Have To Login Again")
  }
  });
  export const likeComment = createAsyncThunk('likes/likeComment', async (commentId) => {
    try {
        console.log("liked")
      const response = await axios.post(`http://localhost:5000/api/entries/comment/${commentId}/like`,{commentId:commentId},config);
      return response.data;
    } catch (error) {
      if(error.response.data.error==="Unauthorized")
      toast.error("Session Expired. You Have To Login Again")
  }
  });
  export const unLikeComment = createAsyncThunk('likes/likeComment', async (commentId) => {
    try {
        console.log("unliked")
      const response = await axios.post(`http://localhost:5000/api/entries/comment/${commentId}/unlike`,{commentId:commentId},config);
      return response.data;
    } catch (error) {
      if(error.response.data.error==="Unauthorized")
      toast.error("Session Expired. You Have To Login Again")
  }
  });
  export const getLikesFromComment= createAsyncThunk('likes/getLikesFromComment', async (commentId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/entries/comment/${commentId}/likes`,{commentId:commentId});

      const data = await response.data
      return data
    } catch (error) {
      if(error.response.data.error==="Unauthorized")
      toast.error("Session Expired. You Have To Login Again")
  }
  });


  
  
const likeSlice = createSlice({
  name: 'likes',
  initialState: {
    // Your initial state here
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

    // like /////////////////////////////////////////

    .addCase(likeEntry.pending, (state) => {
      console.log("hi")
    })
    .addCase(likeEntry.fulfilled, (state, action) => {
      toast.success("liked succesfully")
    })
    .addCase(likeEntry.rejected, (state, action) => {
      // Handle the error state if needed
    })

    // unlike /////////////////////////////////////////

    .addCase(unLikeEntry.pending, (state) => {
      // Handle pending state if needed
    })
    .addCase(unLikeEntry.fulfilled, (state, action) => {

      toast.success("unliked succesfully")
    })
    .addCase(unLikeEntry.rejected, (state, action) => {
      // Handle the error state if needed
    });

  },
});

export default likeSlice.reducer;
