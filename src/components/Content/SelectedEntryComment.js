import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'; // You can use react-icons for like/dislike icons
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLikesFromComment, likeComment, unLikeComment } from '../../store/likes';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const SelectedEntryComment = ({comment}) => {
    const dispatch = useDispatch();

    const [likes, setLikes] = useState([]);
  
    const fetchLikes = async () => {
      try {
        const action = await dispatch(getLikesFromComment(comment._id));
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
        await dispatch(unLikeComment(comment._id)); 
         fetchLikes()
      } else {
        await dispatch(likeComment(comment._id)); 
         fetchLikes()
      }
    };
  
  
    const handleTagClick = () => {
      console.log(user);
    };
    
    useEffect(() => {
      fetchLikes();
    },[]);
      
  
  return (
    <>
    <div className="bg-white p-2 mb-2 border rounded shadow" key={comment?._id}>
        <p className="text-gray-500">{comment?.comment}</p>
        <div className="flex justify-between items-center mt-2">
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
          <div className="text-gray-500">timestamps</div>
        </div>
      </div>
    </>
  )
}

export default SelectedEntryComment