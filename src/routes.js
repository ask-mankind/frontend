import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import Home from "./Pages/Home";
import Content from "./components/Content/Content";
import EntryPage from "./Pages/EntryPage";
import AddEntryPage from "./Pages/AddEntryPage";
import ProfilePage from "./Pages/ProfilePage";
import SettingsPage from "./Pages/SettingsPage";

const routes = [
  {
    element: <Home />,
    children: [
      {
        index: true,
        path: "/",
        element: <Content />,
      },
      {
        path: "/:name",
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
];

export default routes;
