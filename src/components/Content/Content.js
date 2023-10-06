import EntryList from "./EntryList.js";
import { useSelector } from "react-redux";
import LoadingComponent from "../Loading.js";
const Content = () => {

  

let entryData = []
const allEntries = useSelector(state => state.entries.entries)
const filteredEntriesStored = useSelector(state => state.entries.filteredEntries)
const status = useSelector(state=>state.entries.fetchStatus)


if(filteredEntriesStored[0]){
   entryData = filteredEntriesStored
}else{
   entryData = allEntries
}

if(status==="loading"){
  return (
    <div className="container mx-auto mt-4 width-auto">
      <LoadingComponent />
    </div>
  );
}


  return (
    <div className="container mx-auto mt-4 width-auto">
      <h1 className="text-2xl font-semibold mb-4">Current Entries</h1>

      <EntryList entries={entryData} />

    </div>
  );
};

export default Content;


