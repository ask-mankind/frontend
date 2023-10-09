import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import EntryList from "../components/Content/EntryList";
import { useParams } from "react-router-dom";
import UserNotFound from "../components/UserNotFound";
import LoadingComponent from "../components/Loading";
import { getAllUsers } from "../store/users";
import { useEffect } from "react";
import NoEntriesComponent from "../components/NoEntriesComponents";
const ProfilePage = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const userEntries = useSelector((state) =>
    state.entries.entries.filter((entry) => entry.author.username === username)
  );
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.entries.fetchStatus);

  const isUserExist = users?.some((user) => user.username === username);

  const getUsers = async () => {
    await dispatch(getAllUsers());
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (!userEntries.length && status === "loading") {
    return (
      <div className="container mx-auto mt-4 width-auto">
        <LoadingComponent />
      </div>
    );
  } else if (!userEntries.length) {
    if (isUserExist) {
      return (
        <div className="container mx-auto  width-auto">
          <NoEntriesComponent />{" "}
        </div>
      );
    }
    return       <div className="container mx-auto mt-4 width-auto">
    <UserNotFound /> </div>
  }

  return (
    <div className="container mx-auto mt-4 width-auto">
      <h2 className="text-2xl font-semibold mb-4">{username}'s Profile</h2>
      <h3 className="text-xl text-gray-600 font-semibold mb-4">
        {username}'s Entries
      </h3>
      <EntryList entries={userEntries} currentPage="Profile Page" />
    </div>
  );
};

export default ProfilePage;
