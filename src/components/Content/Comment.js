import { FaThumbsUp } from "react-icons/fa"; // You can use react-icons for like/dislike icons
import { useState } from "react";

const Comment = ({ comments }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (disliked) {
      setDisliked(false);
    }
    setLiked(!liked);
  };

  // useEffect(() => {
  //   console.log(comments[0]?.title)

  // });

  const commentComponent = (
    <div
      className="bg-white p-2 mb-2 border rounded shadow"
      key={comments[0]?.id}
    >
      <p className="text-gray-500">{comments[0]?.comment}</p>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center">
        <span className="mr-2  text-gray-500">{comments[0]?.likes.length}</span>
          <button
            className={`mr-2 text-gray-500 hover:text-blue-500 ${
              liked ? "text-blue-500" : ""
            }`}
            onClick={handleLike}
          >
            <FaThumbsUp /> 
          </button>
        </div>
        <div className="text-gray-500">timestamps</div>
      </div>
    </div>
  );

  return (
    <div>
    {comments[0] && commentComponent}
  </div>
    );
};

export default Comment;
