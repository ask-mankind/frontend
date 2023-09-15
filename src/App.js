import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchEntries } from "./store/entries";
function App() {

  const showRoutes = useRoutes(routes)
  const dispatch = useDispatch()
  const entries = useSelector(state => state.entries.entries)

  useEffect(() => {
    //[Dispatch the fetchEntries action when the component mounts
    dispatch(fetchEntries());
  }, []);

  return (
      <>
      
      {showRoutes}
      </>
    );
}

export default App;
