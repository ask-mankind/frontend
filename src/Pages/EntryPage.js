import SelectedEntry from "../components/Content/SelectedEntry";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEntries } from "../store/entries";
import { useDispatch } from "react-redux";
import LoadingComponent from "../components/Loading";
import EntryNotFound from "../components/EntryNotFound";

const EntryPage = () => {

const {entryId} = useParams()

const entries = useSelector(state => state.entries.entries)
const selectedEntry = entries.find((entry) => entry._id === entryId);
const status = useSelector(state=>state.entries.fetchStatus)



if (!selectedEntry && status === "succeeded") {
  return (
    <div className="container mx-auto mt-4 width-auto">
      <EntryNotFound />
    </div>
  );
} else if (!selectedEntry) {
  return (
    <div className="container mx-auto mt-4 width-auto">
      <LoadingComponent />
    </div>
  );
} 




  return (
    <div className="container mx-auto mt-4 width-auto">
      <h1 className="text-2xl font-semibold mb-4">{selectedEntry?.content}</h1>
      <SelectedEntry entry={selectedEntry} />
    </div>
  );
};

export default EntryPage;

