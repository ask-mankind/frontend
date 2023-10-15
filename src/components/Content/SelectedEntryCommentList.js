import SelectedEntryComment from './SelectedEntryComment';

const SelectedEntryComments = ({comments}) => {


  
  
    return (
      comments.map ( comment => <SelectedEntryComment comment={comment} />)
    );
     
  };

export default SelectedEntryComments;