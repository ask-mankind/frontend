import SelectedEntry from "../components/Content/SelectedEntry";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedEntry } from "../store/entries";

const EntryPage = () => {


const selectedEntry = useSelector(state => state.entries.selectedEntry)

const dispatch = useDispatch()
  

useEffect(() => {
return () => {
 dispatch(setSelectedEntry(null))
}
});


  return (
    <div className="container mx-auto mt-4 width-auto">
      <h1 className="text-2xl font-semibold mb-4">{selectedEntry.title}</h1>
      <SelectedEntry entry={selectedEntry} />
    </div>
  );
};

export default EntryPage;

