import { FaThumbsUp } from "react-icons/fa"; // You can use react-icons for like/dislike icons
import { useState } from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import { deleteEntry } from "../../store/entries";
import { useDispatch, useSelector } from "react-redux";
import { likeEntry, unLikeEntry } from "../../store/likes";
import { useEffect } from "react";
import { getLikesFromEntry } from "../../store/likes";
import { useRef } from "react";
import { toast } from "react-toastify";

const Entry = ({ entry, currentPage }) => {
  
  const dispatch = useDispatch();

  const [likes, setLikes] = useState([]);

  const fetchLikes = async () => {
    try {
      const action = await dispatch(getLikesFromEntry(entry._id));
      const currentLikes = action.payload; // Access the payload
      setLikes(currentLikes)
    } catch (error) {
      // Handle any errors that occur during the dispatch
      console.error("Error fetching likes:", error);
    }
  };


  const user = JSON.parse(localStorage.getItem("ahkUser"));

  const isUserLiked = likes.some((like) => like.user === user?._id);


  const handleLike = async() => {
    if(!user){
      toast.error("You have to login for liking entries")
      return
    }
    if (isUserLiked) {
      await dispatch(unLikeEntry(entry._id)); 
       fetchLikes()
    } else {
      await dispatch(likeEntry(entry._id)); 
       fetchLikes()
    }
  };

  const handleEntryDelete = (entry) => {
    dispatch(deleteEntry(entry));
  };

  const handleTagClick = () => {
    console.log(user);
  };
  
  useEffect(() => {
    fetchLikes();
  },[]);
    

  return (
    <>
      <div className=" bg-white p-4 mb-4 border rounded shadow" key={entry._id}>
        <Link to={`/${entry._id}`}>
          <p className="text-lg font-semibold inline-block ">{entry.content}</p>
        </Link>
        {entry.content !== "Not Found" && (
          <div className="flex flex-col  mt-3">
            <div className="flex items-center">
              <span className="mr-2 mb-4 text-gray-500">{likes.length}</span>
              <button
                className={!isUserLiked ? "mr-2 mb-4 text-gray-500 hover:text-blue-500 ":"mr-2 mb-4 text-blue-500"
                   
                }
                onClick={handleLike}
              >
                <FaThumbsUp />
              </button>
            </div>
            <Comment comments={entry?.comments} />
            <div className="flex justify-between">
              <div className="flex ml-1">
                {entry?.tags.map((tag) => (
                  <div
                    key={tag._id}
                    onClick={() => handleTagClick()}
                    className="text-blue-500 text-md hover:cursor-pointer hover:underline mr-1"
                  >
                    {tag.name}
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-2">
                <Link to={`/profile/${entry?.author.username}`}>
                  by {entry?.author.username}
                </Link>
                <div className="text-gray-500">timestamps</div>
              </div>
            </div>
          </div>
        )}

        {currentPage === "Profile Page" && user?._id === entry?.author._id && (
          <button
            onClick={() => handleEntryDelete(entry)}
            className=" bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out inline-block w-auto mr-2"
          >
            Delete
          </button>
        )}
      </div>
    </>
  );
};

export default Entry;
