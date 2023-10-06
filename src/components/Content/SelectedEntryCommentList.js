import { FaThumbsUp } from 'react-icons/fa'; // You can use react-icons for like/dislike icons
import { useState } from 'react';
import SelectedEntryComment from './SelectedEntryComment';

const SelectedEntryComments = ({entry}) => {

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
  
    const handleLike = () => {
      if (disliked) {
        setDisliked(false);
      }
      setLiked(!liked);
    };


    const comments = entry.comments

  
  
    return (
      comments.map ( comment => <SelectedEntryComment comment={comment}/>)
    );
     
  };

export default SelectedEntryComments;