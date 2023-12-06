import Home from "../../Pages/Home";
import Main from "../../layout/Main";

const MainRoute = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
];

export default MainRoute;