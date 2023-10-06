import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import EntryList from "../components/Content/EntryList";
import { useParams } from "react-router-dom";
import UserNotFound from "../components/UserNotFound";
import LoadingComponent from "../components/Loading";
const ProfilePage = () => {
  const { username } = useParams();
  const userEntries = useSelector((state) =>
    state.entries.entries.filter((entry) => entry.author.username === username)
  );
  const status = useSelector((state) => state.entries.fetchStatus);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   // If userEntries is empty, navigate to the "User Not Found" page
  //   if (!userEntries.length) {
  //     navigate('/profile/user-not-found');
  //     console.log("saddas")
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // });
  if (!userEntries.length && status === "loading") {
    return (
      <div className="container mx-auto mt-4 width-auto">
        <LoadingComponent />
      </div>
    );
  } else if (!userEntries.length) {
    return <UserNotFound />;
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
