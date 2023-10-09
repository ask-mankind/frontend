import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAuthToken } from '../utils/authentication';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const token = getAuthToken()
const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };
  
export const postComment = createAsyncThunk('comments/postComment', async (commentData) => {
    console.log(commentData)
    try {
      const response = await axios.post(`http://localhost:5000/api/entries/${commentData.entryId}/comment`, {
        comment: commentData.comment,
      },config);
  
      return response.data;
    } catch (error) {
      if(error.response.data.error==="Unauthorized")
      toast.error("Session Expired. You Have To Login Again")
  }
  });
  export const getCommentsFromEntry = createAsyncThunk('comments/getCommentsFromEntry', async (entryId) => {
    console.log(entryId)
    try {
      const response = await axios.get(`http://localhost:5000/api/entries/${entryId}/comments`, {
        entryId:entryId,
      });
  
      return response.data;
    } catch (error) {
      throw error;
  }
  });

  
const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    // Your initial state here
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postComment.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(postComment.fulfilled, (state, action) => {
        toast.success("Commented succesfully")
      })
      .addCase(postComment.rejected, (state, action) => {
        // Handle the error state if needed
      });
  },
});

export default commentsSlice.reducer;
