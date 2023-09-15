import Entry from "./Entry.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const Content = () => {

  

let entryData = []
const allEntries = useSelector(state => state.entries.entries)
const filteredEntriesStored = useSelector(state => state.entries.filteredEntries)


if(filteredEntriesStored[0]){
   entryData = filteredEntriesStored
}else{
   entryData = allEntries
}



  return (
    <div className="container mx-auto mt-4 width-auto">
      <h1 className="text-2xl font-semibold mb-4">Current Entries</h1>

      <Entry entries={entryData} />

    </div>
  );
};

export default Content;


