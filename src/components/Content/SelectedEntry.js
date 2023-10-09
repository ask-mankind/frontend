import { useState } from "react";
import SelectedEntryCommentList from "./SelectedEntryCommentList";
import MakeComment from "./MakeComment";
import { useDispatch } from "react-redux";
import { getCommentsFromEntry } from "../../store/comments";
import { useEffect } from "react";

const SelectedEntry = ({ entry }) => {
  const [comments, setComments] = useState();

  const dispatch = useDispatch();

  const fetchComments = async () => {
    try {
      const action = await dispatch(getCommentsFromEntry(entry._id));
      const comments = action.payload; // Access the payload
      setComments(comments);
      console.log(comments);
    } catch (error) {
      // Handle any errors that occur during the dispatch
      console.error("Error fetching likes:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleTagClick = (tag) => {
    console.log(entry.comments);
  };

  return (
    <div className="flex flex-col  mt-3">
      <div className="flex items-center mb-2">
        {entry?.tags?.map((tag) => (
          <div
            key={tag._id}
            onClick={() => handleTagClick(tag)}
            className="inline-block bg-lilac text-white text-sm font-semibold py-1 px-2 rounded-full mr-1 "
          >
            {tag.name}
          </div>
        ))}
      </div>
      {comments && <SelectedEntryCommentList comments={comments} />}
      <div className="flex flex-col space-y-2">
        <div>by {entry?.author?.username}</div>
        <div className="text-gray-500">timestamps</div>
      </div>
      <MakeComment entry={entry} onFetchComments={fetchComments} />
    </div>
  );
};

export default SelectedEntry;
