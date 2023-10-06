import Entry from "./Entry";
const EntryList = ({ entries, currentPage }) => {
  
  return entries.map((entry) => (
    <Entry entry={entry} currentPage={currentPage} />
  ));
};

export default EntryList;
