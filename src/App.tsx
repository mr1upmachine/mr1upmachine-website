import { Outlet } from "react-router-dom";

import "./App.css";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <div className="app-main">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
