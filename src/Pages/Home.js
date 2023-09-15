import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { setFilteredEntries } from "../store/entries";
import AddEntryButton from "../components/AddEntryButton";


const Home = () => {
  const entryData = useSelector(state => state.entries.entries);
  const [searchQuery, setSearchQuery] = useState('');


  const dispatch = useDispatch()
  

  // Function to handle changes in the search box

  // Function to filter entries based on the search query
  let filteredEntries = entryData.filter(entry =>
    entry.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if(searchQuery != null && filteredEntries[0]==null){
    filteredEntries = [{
      user: "Not Found",
      id:Date.now(),
      title: "Search Not Found",
      timestamps: Date.now(),
    },]
  }
  const handleSearchInputChange = (event) => {
    dispatch(setFilteredEntries(filteredEntries))
    setSearchQuery(event.target.value);
  };


  return (
    <div>
      <Header onSearchInputChange = {handleSearchInputChange} />
      <div className="flex flex-row space-x-5 mr-5">
        <Navbar />
        <Outlet/>
        <AddEntryButton/>
      </div>
    </div>
  );
};

export default Home;
