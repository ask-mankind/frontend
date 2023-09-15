import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEntries } from '../store/entries';
import { useNavigate } from 'react-router-dom';

const AddEntryPage = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  const navigate = useNavigate()

  const handleAddEntry = () => {
    // Create a new entry object with title and tags
    const newEntry = {
      user: 'CurrentUser', // Replace with the actual user's name
      id: Date.now(), // Generate a unique ID (you can use a library like uuid for more robust IDs)
      title: title,
      tags: tags.split(',').map((tag) => tag.trim()), // Split and trim tags
      comments: [],
      likes: 0,
      timestamps: new Date().toLocaleTimeString(),
    };

    // Dispatch the action to add the new entry to Redux state
    dispatch(setEntries(newEntry));
    navigate("/")

    // Navigate back to the home page or any other desired route
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-3">Add New Entry</h2>
      <div className="mb-3">
        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-3">
        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={tags}
          onChange={handleTagsChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleAddEntry}
        className="bg-lilac hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
      >
        Add Entry
      </button>
    </div>
  );
};

export default AddEntryPage;
