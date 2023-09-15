import { FaThumbsUp } from "react-icons/fa"; // You can use react-icons for like/dislike icons
import { useState } from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import { setSelectedEntry } from "../../store/entries";
import { useDispatch } from "react-redux";
import MakeComment from "./MakeComment";

const Entry = ({ entries }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const dispatch = useDispatch();

  const handleEntryClick = (entry) => {
    dispatch(setSelectedEntry(entry));
  };

  const handleTagClick = () => {
    console.log(entries[0].tags);
  };
  function titleToUrlFormat(title) {
    // Replace spaces with hyphens and make the string lowercase
    return title.replace(/ /g, '-').toLowerCase();
  }


  return entries.map((entry) => (
    <div className="bg-white p-4 mb-4 border rounded shadow" key={entry.id}>
      <Link to={`/${titleToUrlFormat(entry?.content)}`}>
        <p
          className="text-lg font-semibold"
          onClick={() => handleEntryClick(entry)}
        >
          {entry.content}
        </p>
      </Link>
      {entry.user !== "Not Found" &&
      <div className="flex flex-col  mt-3">
        <div className="flex items-center">
        <span className="mr-2 mb-4 text-gray-500">{entry?.likes.length}</span>
          <button
            className={`mr-2 mb-4 text-gray-500 hover:text-blue-500 ${
              liked ? "text-blue-500" : ""
            }`}
            onClick={handleLike}
          >
            <FaThumbsUp />
          </button>
        </div>
        <Comment comments={entry?.comments} />
        <div className="flex justify-between">
          <div className="text-gray-500">timestamps</div>
          <div className="flex">
            {entry?.tags.map((tag) => (
              <div id={tag.id}
                onClick={() => handleTagClick()}
                className="text-blue-500 text-md hover:cursor-pointer hover:underline mr-1"
              >
                {tag.name}
              </div>
            ))}
          </div>
        </div>
         <MakeComment entry={entry} />
      </div>
}
    </div>
  ));
};

export default Entry;