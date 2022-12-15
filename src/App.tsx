import { Outlet } from "react-router-dom";

import "./App.css";
import Footer from "./containers/Footer/Footer";
import { useColorTheme } from "./hooks/useColorTheme";

function App() {
  const theme = useColorTheme();

  return (
    <div className="app-container" data-theme={theme}>
      <div className="app-main">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
