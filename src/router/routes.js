import pathes from "./pathes";
import About from "./components/about";
import Profile from "./components/profile";
import Register from "./components/register";
import Dashboard from "./components/dashboard";

const routes = [
  {
    name: "home",
    path: pathes.HOME,
    component: null,
    exact: true,
    needAuthentication: false,
  },
  {
    name: "about",
    path: pathes.ABOUT,
    component: About,
    exact: true,
    needAuthentication: false,
  },

  {
    name: "register",
    path: pathes.REGISTER,
    component: Register,
    exact: true,
    needAuthentication: false,
  },
  {
    name: "dashboard",
    path: pathes.DASHBOARD,
    component: Dashboard,
    exact: true,
    needAuthentication: true,
  },
  {
    name: "profile",
    path: pathes.PROFILE,
    component: Profile,
    exact: true,
    needAuthentication: true,
  },
];

export default routes;
