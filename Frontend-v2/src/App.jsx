import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Router/router";

function App() {
  return (
    <div className="font-robo">
      <RouterProvider router={router} />
      <div className="grid place-items-center my-10">
        <button className="px-32 py-4 bg-black text-white button1-a relative transition-all duration-300">
          dummy
        </button>
      </div>
    </div>
  );
}

export default App;
