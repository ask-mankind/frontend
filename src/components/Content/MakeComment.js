import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment } from "../../store/comments";
import { useEffect } from "react";
import { getAuthToken } from "../../utils/authentication";
import { useNavigate } from "react-router-dom";

const MakeComment = ({ entry }) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();

  const handleCommentClick = () => {
    setIsCommenting(!isCommenting);
    setCommentText("");
    const token = getAuthToken()
    if(!token){
      navigate("/login")
    }

  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
    console.log(commentText);
  };

  const navigate = useNavigate()



  const handleSaveComment = () => {
    // Create a new comment object
    const commentData = {
      entryId: entry._id,
      comment: commentText,
    };

    // Dispatch the action to add the new comment to Redux state
    dispatch(postComment(commentData));

    // Clear the comment input and close the comment area
    setCommentText("");
    setIsCommenting(false);
  };

  return (
    <div>
      {isCommenting ?  (
        <div className="mt-4">
          <textarea
            value={commentText}
            onChange={handleCommentChange}
            rows="4"
            placeholder="Enter your comment..."
            className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            onClick={() => handleSaveComment()}
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
