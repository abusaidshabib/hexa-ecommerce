import Home from "../../Pages/Main/Home";
import SingleProduct from "../../Pages/Main/SingleProduct";
import LoginPage from "../../features/Main/LoginPage";
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
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export default MainRoute;
