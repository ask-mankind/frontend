import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setComments } from "../../store/entries";
import { useSelector } from "react-redux";

const MakeComment = ({entry}) => {


  const [isCommenting, setIsCommenting] = useState(false);
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();

  const handleCommentClick = () => {
    setIsCommenting(!isCommenting);
    setCommentText("")

  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
    console.log(commentText);
  };

  const handleSaveComment = (id) => {
    // Create a new comment object
    const comment = {
      user: "CurrentUser", // Replace with the actual user's name
      id: Date.now(), // Generate a unique ID (you can use a library like uuid for more robust IDs)
      content: commentText,
      likes: 0,
      tags: [],
      timestamps: new Date().toLocaleTimeString(),
    };

    // Dispatch the action to add the new comment to Redux state
    dispatch(
      setComments({
        entryId: id,
        newComment: comment,
      })
    );
    
    console.log(entry.comments)
    // Clear the comment input and close the comment area
    setCommentText("");
    setIsCommenting(false);
  };

  return (
    <div>
      {isCommenting ? (
        <div className="mt-4">
          <textarea
            value={commentText}
            onChange={handleCommentChange}
            rows="4"
            placeholder="Enter your comment..."
            className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            onClick={() => handleSaveComment(entry.id)}
            className="mt-2 bg-lilac hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md cursor-pointer mr-10"
          >
            Save Comment
          </button>
          <button
            onClick={handleCommentClick}
            className="mt-2 bg-lilac hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={handleCommentClick}
          className="mt-4 w-32 bg-lilac hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
        >
          Comment
        </button>
      )}
    </div>
  );
};

export default MakeComment;
