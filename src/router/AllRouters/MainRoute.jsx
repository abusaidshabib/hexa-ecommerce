import Home from "../../Pages/Main/Home";
import SingleProduct from "../../Pages/Main/SingleProduct";
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
      {
        path: "/product",
        element: <SingleProduct />,
      },
    ],
  },
];

export default MainRoute;
