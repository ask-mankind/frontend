import React from 'react';
import { Link } from 'react-router-dom';

const AddEntryButton = () => {
  return (
    <Link to="/AddEntry">
      <button
        className="fixed bottom-14 right-4 bg-lilac hover:bg-purple-600 text-white py-2 px-4 rounded-full duration-200 shadow-2xl "
        type="button"
      >
        Add Entry
      </button>
    </Link>
  );
};

export default AddEntryButton;
