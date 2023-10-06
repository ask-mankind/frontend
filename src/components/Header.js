import React from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon from a package like react-icons
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../store/auth";
import { useState } from "react";
import { setFilteredEntries } from "../store/entries";
import { logoutUser } from "../store/auth";
import { getAuthUser } from "../utils/authentication";
const Header = ({ onSearchInputChange }) => {
  
  const user = getAuthUser()

  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  const navigate = useNavigate()

const logOut = () => {
dispatch(logoutUser())
navigate("/")

}

  let rigthSideOfHeader = (
    <div>
      <Link to="/register" className="text-white hover:underline mr-4">
        Register
      </Link>
      <Link to="/login" className="text-white hover:underline">
        Login
      </Link>
    </div>
  );

  if (token) {
    rigthSideOfHeader = (
      <div>
        <div className="text-white mr-4 mb-2 text-center">Welcome, {user?.fullname}</div>
        <Link to={`/profile/${user?.username}`} className="text-white hover:underline mr-4">
           Profile
        </Link>
        <button className="mr-4" onClick={logOut}>Logout</button>
        <Link to={`/profile/${user?.username}/settings`} className="text-white hover:underline mr-4">
           Settings
        </Link>

      </div>
    );
  }

  const entryData = useSelector(state => state.entries.entries);
  const [searchQuery, setSearchQuery] = useState('');

  
  const handleSearchInputChange = (event) => {
    const newSearchQuery = event.target.value;

    let filteredEntries = entryData.filter(entry =>
      entry.content.toLowerCase().includes(newSearchQuery.toLowerCase())
    ); 
  
    if(searchQuery != null && filteredEntries[0]==null){
      filteredEntries = [{
        content: "Not Found",
        _id:Date.now(),
        author:{
          username:"not found",
          _id:"not found"
        },
        tags:[
          {name:"not found"}
        ],
        comments:[],


      },]
    }
    setSearchQuery(newSearchQuery);
    console.log(newSearchQuery); // Use the updated value directly
    dispatch(setFilteredEntries(filteredEntries));

  };

  return (
    <header className="bg-lilac p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/path/to/your/logo.png" // Replace with your logo image path
            alt="App Logo"
            className="h-8 w-8 mr-2" // Adjust the size as needed
          />
          <Link to="/" className="text-white text-lg font-semibold">
            Ask - Mankind
          </Link>
        </div>

        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search..."
            onChange={handleSearchInputChange}
            className="bg-white text-gray-700 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring focus:ring-lilac"
          />
          <span className="absolute left-3 top-2">
            <FaSearch className="text-gray-400 mt-1" />
          </span>
        </div>

        {/* Register and Login Buttons */}
        <div className="space-x-4">{rigthSideOfHeader} </div>
      </div>
    </header>
  );
};

export default Header;
