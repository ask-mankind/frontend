import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import AddEntryButton from "../components/AddEntryButton";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    console.log(localStorage.getItem("ahkUser"))
  });


  return (
    <div>
      <Header />
      <div className="flex flex-row space-x-5 mr-5">
        {/* <Navbar /> */}
        <Outlet />
        <AddEntryButton />
      </div>
    </div>
  );
};

export default Home;
