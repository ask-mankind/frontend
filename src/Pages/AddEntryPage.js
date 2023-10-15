import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postEntry } from "../store/entries";
import { useEffect } from "react";
import { getAuthToken } from "../utils/authentication";

const AddEntryPage = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      navigate("/login");
    }
  });

  const createNewEntry = async (newEntryData) => {
    try {
      dispatch(postEntry(newEntryData));
      // After the entry is successfully posted, you can take any additional actions as needed.
    } catch (error) {
      // Handle errors here
    }
  };

  const handleAddEntry = () => {
    // Create a new entry object with title and tags
    const newEntry = {
      content: title,
      tags: tags.split(",").map((tag) => tag.trim()), // Split and trim tags
    };

    // Dispatch the action to add the new entry to Redux state
    createNewEntry(newEntry);
    navigate("/");

    // Navigate back to the home page or any other desired route
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-3">Add New Entry</h2>
      <form onSubmit={handleAddEntry}>
        <div className="mb-3">
          <label
            className=" text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label
            className=" text-gray-700 text-sm font-bold mb-2"
            htmlFor="tags"
          >
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={tags}
            onChange={handleTagsChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-lilac hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default AddEntryPage;
