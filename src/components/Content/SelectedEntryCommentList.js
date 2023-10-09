import { FaThumbsUp } from 'react-icons/fa'; // You can use react-icons for like/dislike icons
import { useState } from 'react';
import SelectedEntryComment from './SelectedEntryComment';
import { useDispatch } from 'react-redux';
import { getCommentsFromEntry } from '../../store/comments'; 

const SelectedEntryComments = ({comments}) => {


  
  
    return (
      comments.map ( comment => <SelectedEntryComment comment={comment} />)
    );
     
  };

export default SelectedEntryComments;