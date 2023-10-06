import { useState } from "react";
import SelectedEntryCommentList from "./SelectedEntryCommentList"; 
import MakeComment from "./MakeComment";

const SelectedEntry = ({ entry }) => {

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  
  const handleLike = () => {
    if (disliked) {
      setDisliked(false);
    }
    setLiked(!liked);

  };


  const handleTagClick = (tag) => {
    console.log(entry.comments);
  };




  return (
      <div className="flex flex-col  mt-3">
        <div className="flex items-center mb-2"> 
        {entry?.tags?.map((tag) => (  
              <div key = {tag._id}
                onClick={() => handleTagClick(tag)}
                className="text-blue-500 text-md hover:cursor-pointer hover:underline mr-1"
              > 
              {tag.name}
              </div>
            ))}

        </div>
        <SelectedEntryCommentList entry={entry}/>
        <div className="flex flex-col space-y-2">
              <div>by {entry?.author?.username}</div>
              <div className="text-gray-500">timestamps</div>
            </div>
        <MakeComment entry={entry} />
      </div>
  );
};

export default SelectedEntry;
