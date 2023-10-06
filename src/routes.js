import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import Home from "./Pages/Home";
import Content from "./components/Content/Content";
import EntryPage from "./Pages/EntryPage";
import AddEntryPage from "./Pages/AddEntryPage";
import ProfilePage from "./Pages/ProfilePage";
import SettingsPage from "./Pages/SettingsPage";
import { checkAuthLoader } from "./utils/authentication";
import LogoutComponent from "./utils/LogoutComponent";

const routes = [
  {
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/:entryId",
        element: <EntryPage />,
      },
      {
        path: "/AddEntry",
        element: <AddEntryPage />,
      },
      {
        path: "/profile/:username",
        element: <ProfilePage />,
      },
      { path: "/profile/:username/settings", element: <SettingsPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/logout",
    element: <LogoutComponent />,

  }
];

export default routes;
