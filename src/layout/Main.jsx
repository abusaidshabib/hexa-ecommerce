import { Outlet } from "react-router-dom";
import Navbar from "../features/Main/Shared/Navbar";
import LargeMenu from "../features/Main/Shared/LargeMenu";
import Footer from "../features/Main/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <LargeMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
