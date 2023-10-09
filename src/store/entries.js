import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAuthToken } from "../utils/authentication";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  fetchStatus:null,
  postStatus:null,
  deleteStatus:null,
  entries:[]  ,
  filteredEntries: [],
  selectedEntry : {},
};
const token = getAuthToken()
const config = {
  headers: {
    'Authorization': `Bearer ${token}`,
  },
};


export const postEntry = createAsyncThunk('entries/postEntry', async (newEntryData) => {
  try {
    console.log(token)
    console.log(newEntryData)
    const response = await axios.post('http://localhost:5000/api/entries', newEntryData,config);
    return response.data;
  } catch (error) {
    if(error.response.data.error==="Unauthorized")
    toast.error("Session Expired. You Have To Login Again")
    
}
});

export const fetchEntries = createAsyncThunk('entries/fetchEntries', async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/entries');
    return response.data;
  } catch (error) {
    if(error.response.data.error==="Unauthorized")
    toast.error("Session Expired. You Have To Login Again")
}
});

export const deleteEntry = createAsyncThunk('entries/deleteEntry', async (entry) => {
  try {
    console.log(entry._id)
    const response = await axios.delete(`http://localhost:5000/api/entries/${entry._id}/delete`,config);
    return response.data;
  } catch (error) {
    if(error.response.data.error==="Unauthorized")
    toast.error("Session Expired. You Have To Login Again")
}
});



const entries = createSlice({
  name: "entries",
  initialState,
  reducers: {
    setEntries: (state, action) => {
      state.entries.push(action.payload);
    },
    searchEntries: (state, action) => {
      state = action.payload;
    },
    setFilteredEntries: (state, action) => {
      state.filteredEntries = action.payload
    },
    setSelectedEntry : (state,action) =>{
      state.selectedEntry = action.payload
    },
    setTags: (state, action) => {
      const { entryId, newTags } = action.payload;
      console.log(action.payload)
      const entry = state.entries.find((entry) => entry.id === entryId);
      
      if (entry) {
        entry.tags.push(newTags);
      }
    },
    setComments: (state, action) => {
      const { entryId, newComment } = action.payload;

      const entry = state.entries.find((entry) => entry.id === entryId);

      if (entry) {
        entry.comments.push(newComment);
      }
    },

  },
  extraReducers: (builder) => {
    builder

    // fetch //////////////////////////////////////////////////////////////////////////////////////////////////////////////

      .addCase(fetchEntries.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(fetchEntries.fulfilled, (state, action) => {
        state.fetchStatus = 'succeeded';
        state.entries = action.payload;
      })
      .addCase(fetchEntries.rejected, (state, action) => {
        state.fetchStatus = 'failed';
        state.error = action.error.message;
      })

      //post ////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

      .addCase(postEntry.pending, (state) => {
        state.postStatus = 'loading';

      })
      .addCase(postEntry.fulfilled, (state, action) => {
        state.postStatus = 'succeeded';
        state.entries.push(action.payload); // Assuming the API response is the newly created entry
        toast.success("Posted entry succesfully")
      })
      .addCase(postEntry.rejected, (state, action) => {
        state.postStatus = 'failed';
        state.error = action.error.message;
        toast.error(action.error.message)
      })

      //delete ////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

      .addCase(deleteEntry.pending, (state) => {
        state.deleteStatus = 'loading';


      })
      .addCase(deleteEntry.fulfilled, (state) => {
        state.deleteStatus = 'succeeded';
        toast.success("Deleted entry succesfully")


      })
      .addCase(deleteEntry.rejected, (state, action) => {
        state.deleteStatus = 'failed';
        state.error = action.error.message;
        toast.error(action.error.message)

      });
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


    
  },

});

export const { setEntries, setFilteredEntries,searchEntries,setSelectedEntry,setTags,setComments} = entries.actions;
export default entries.reducer;


// [
//   {
//     user: "Alperen",
//     id:1,
//     title: "Will ai control the world",
//     comments: [
//       {
//         user: "Alihan",
//         id:1,
//         content: "of Course",
//         likes: 5,
//         tags: "#ai",
//         timestamps: "04:12:12",
//       },
//       {
//         user: "Alihan",
//         id:2,
//         content: "no",
//         likes: 5,
//         tags: "#ai",
//         timestamps: "04:12:12",
//       },        {
//         user: "Alihan",
//         id:3,
//         content: "i dont think so",
//         likes: 5,
//         tags: "#ai",
//         timestamps: "04:12:12",
//       },        {
//         user: "Alihan",
//         id:4,
//         content: "No, AI will not take over the world. Movies like I, Robot are science fiction, with an emphasis on the word fiction. But advances in technology like ChatGPT and other Large Language models have reignited the debate. The ability for AI tools to generate realistic-looking images, written content and many other applications has triggered enthusiasts to embrace the technology further, while pushing sceptics away.",
//         likes: 5,
//         tags: "#ai",
//         timestamps: "04:12:12",
//       },
//     ],
//     likes: 5,
//     tags: ["#ai","#control","#world"],
//     timestamps: "04:12:12",
//   },
//   {
//     user: "Alihan",
//     id:2,
//     title: "Will this form change the world",
//     comments: [],
//     likes: 5,
//     tags: ["#ask-human kind"],
//     timestamps: "04:12:12",
//   },
//   {
//     user: "Osman",
//     id:3,
//     title: "The company that hurts its customers the most",
//     comments: [],
//     likes: 5,
//     tags: ["#company"],
//     timestamps: "04:12:12",
//   },
// ],