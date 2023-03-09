import { createBrowserRouter } from "react-router-dom";
import DashCollection from "../../DashboardPages/DashCollection/DashCollection";
import DashHome from "../../DashboardPages/DashHome/DashHome";
import DashProductEdit from "../../DashboardPages/DashProductEdit/DashProductEdit";
import DashProducts from "../../DashboardPages/DashProducts/DashProducts";
import Dashboard from "../../layout/Dashboard";
import Main from "../../layout/Main";
import About from "../../Pages/About/About/About";
import Blog from "../../Pages/Blog/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CollectionProduct from "../../Pages/CollectionProduct/CollectionProduct";
import Contact from "../../Pages/Contact/Contact/Contact";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import SingleProductPage from "../../Pages/SingleProductPages/SingleProductPages/SingleProductPage";

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
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>
      },
      {
        path: "/collection/:name",
        loader: ({ params }) => fetch(`http://localhost:5000/collection/${params.name}`),
        element: <CollectionProduct></CollectionProduct>
      },

      {
        path: "/product/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
        element: <SingleProductPage></SingleProductPage>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/home",
        element: <DashHome></DashHome>
      },
      {
        path: "/dashboard/products",
        element: <DashProducts></DashProducts>
      },
      {
        path: "/dashboard/collection",
        element: <DashCollection></DashCollection>
      },
      {
        path: "/dashboard/product-edit",
        element: <DashProductEdit></DashProductEdit>
      }
    ]
  }
])

export default router;