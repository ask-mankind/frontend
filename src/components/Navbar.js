import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedEntry } from '../store/entries';
import { useDispatch, } from "react-redux";

const Navbar = () => {
  
  const dispatch = useDispatch()

  const handleEntryClick =(entry) =>{
    dispatch(setSelectedEntry(entry))
  }

  const entries = useSelector(state => state.entries.entries)


  return (
    <nav className="bg-white shadow-md inline-block">
      <div className="container mx-auto flex flex-col items-start p-4">
        {/* Trending Entries (Vertical on the Left) */}
        <ul className="space-y-2">
          {entries.map((entry, index) => (
            <li key={index} onClick={() => handleEntryClick(entry)}>
              <Link to={`http://localhost:3000/${entry?.title}`}
                className="text-gray-700 hover:text-lilac transition duration-300"
              >
                {entry.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo and App Name */}
        <div className="flex flex-col items-center mt-4 space-y-2">
          <img
            src="/path/to/your/logo.png" // Replace with your logo image path
            alt="App Logo"
            className="h-8 w-8 mr-2" // Adjust the size as needed
          />
          <span className="text-lg font-semibold text-lilac">            Ask - Mankind
</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
