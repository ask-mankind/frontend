import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEntries } from "./store/entries";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const showRoutes = useRoutes(routes)
  const dispatch = useDispatch()

  useEffect(() => {
    //[Dispatch the fetchEntries action when the component mounts
    dispatch(fetchEntries());
  }, );

  return (
      <>
      
      {showRoutes}
      <ToastContainer />
      </>
    );
}

export default App;
