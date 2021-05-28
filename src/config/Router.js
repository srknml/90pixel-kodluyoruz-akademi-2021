import Home from "../pages/Home";
import Attendants from "../pages/Attendants";
import ProfileSettings from "../components/ProfileSettings";
import NotFound from "../pages/NotFound";
import ProfileDetail from "../pages/ProfileDetail";
export const routes = [
    {
        path: "/",
        exact: true,
        component: <Home />,
        title: "Home",
        isNavItem: false,
        isAuthNeeded: false,
    },
    {
        path: "/attendants",
        exact: true,
        component: <Attendants />,
        title: "Attendants",
        isNavItem: true,
        isAuthNeeded: false,
    },

    {
        path: "/profile_settings",
        exact: true,
        component: ProfileSettings,
        title: "Profile",
        isNavItem: true,
        isAuthNeeded: true,
    },
    {
        path: "/profile/:id",
        exact: true,
        component: <ProfileDetail />,
        title: "Profile",
        isNavItem: false,
        isAuthNeeded: false,
    },
    {
        path: "*",
        exact: true,
        component: <NotFound />,
        title: "NotFound",
        isNavItem: false,
        isAuthNeeded: false,
    },
];
