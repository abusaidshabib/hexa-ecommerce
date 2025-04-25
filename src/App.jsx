import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Router/router";

function App() {
  return (
    <div className="font-robo select-none">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
