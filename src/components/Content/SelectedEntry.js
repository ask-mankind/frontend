import { useState } from "react";
import SelectedEntryComments from "./SelectedEntryComments"; 
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
      <div className="flex flex-col  mt-3" key={entry.id}>
        <div className="flex items-center mb-2"> 
        {entry.tags.map((tag) => (
              <div
                onClick={() => handleTagClick(tag)}
                className="text-blue-500 text-md hover:cursor-pointer hover:underline mr-1"
              > 
              {tag}
              </div>
            ))}

        </div>
        <SelectedEntryComments/>
        <div className="text-gray-500">{entry.timestamps}</div>
        <MakeComment entry={entry} />
      </div>
  );
};

export default SelectedEntry;
