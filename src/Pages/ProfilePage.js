import React from "react";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import Entry from "../components/Content/Entry";

const ProfilePage = () => {
  const { username } = useParams(); // Get the username from route parameters
  const userEntries = useSelector((state) =>
    state.entries.entries.filter((entry) => entry.user === username)
  );

  useEffect(() => {
    // Update the document title using the browser API
    console.log(username);
  });

  return (
    <div className="container mx-auto mt-4 width-auto">
      <h2 className="text-2xl font-semibold mb-4">{username}'s Profile</h2>
      <h3 className="text-xl text-gray-600 font-semibold mb-4">
        {username}'s Entries
      </h3>
      <Entry entries={userEntries}/>
    </div>
  );
};

export default ProfilePage;
