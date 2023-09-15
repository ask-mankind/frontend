import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entries: [
    {
      user: "Alperen",
      id:1,
      title: "Will ai control the world",
      comments: [
        {
          user: "Alihan",
          id:1,
          content: "of Course",
          likes: 5,
          tags: "#ai",
          timestamps: "04:12:12",
        },
        {
          user: "Alihan",
          id:2,
          content: "no",
          likes: 5,
          tags: "#ai",
          timestamps: "04:12:12",
        },        {
          user: "Alihan",
          id:3,
          content: "i dont think so",
          likes: 5,
          tags: "#ai",
          timestamps: "04:12:12",
        },        {
          user: "Alihan",
          id:4,
          content: "No, AI will not take over the world. Movies like I, Robot are science fiction, with an emphasis on the word fiction. But advances in technology like ChatGPT and other Large Language models have reignited the debate. The ability for AI tools to generate realistic-looking images, written content and many other applications has triggered enthusiasts to embrace the technology further, while pushing sceptics away.",
          likes: 5,
          tags: "#ai",
          timestamps: "04:12:12",
        },
      ],
      likes: 5,
      tags: ["#ai","#control","#world"],
      timestamps: "04:12:12",
    },
    {
      user: "Alihan",
      id:2,
      title: "Will this form change the world ",
      comments: [],
      likes: 5,
      tags: ["#ask-human kind"],
      timestamps: "04:12:12",
    },
    {
      user: "Osman",
      id:3,
      title: "The company that hurts its customers the most",
      comments: [],
      likes: 5,
      tags: ["#company"],
      timestamps: "04:12:12",
    },
  ],
  filteredEntries: [],
  selectedEntry : {},
};

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
});

export const { setEntries, setFilteredEntries,searchEntries,setSelectedEntry,setTags,setComments} = entries.actions;
export default entries.reducer;
