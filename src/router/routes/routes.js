import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>
      }
    ]
  }
])

export default router;