import AboutMe from "../Pages/AboutMe";
import Home from "../Pages/Home";

export const ROUTES = [
  {
    path: "/",
    component: Home,
    exact: true,
    private: true

  },
  {
    path: "/about-me",
    component: AboutMe,
    exact: true,
    private: true
  },
];
