import { FaThumbsUp } from 'react-icons/fa'; // You can use react-icons for like/dislike icons
import { useState,useEffect } from 'react';
import {useSelector } from 'react-redux/es/hooks/useSelector';

const SelectedEntryComments = () => {

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
  
    const handleLike = () => {
      if (disliked) {
        setDisliked(false);
      }
      setLiked(!liked);
    };


    const comments = useSelector(state => state.entries.selectedEntry.comments)

  
  
    return (
      comments.map ( comment =>
      <div className="bg-white p-2 mb-2 border rounded shadow" key={comment?.id}>
        <p className="text-gray-500">{comment?.comment}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
          <span className="mr-2  text-gray-500">likes </span>
            <button
              className={`mr-2 text-gray-500 hover:text-blue-500 ${
                liked ? 'text-blue-500' : ''
              }`}
              onClick={handleLike}
            >
              <FaThumbsUp /> 
            </button>
          </div>
          <div className="text-gray-500">timestamps</div>
        </div>
      </div>
      )
    );
     
  };

export default SelectedEntryComments;