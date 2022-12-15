import { Outlet } from "react-router-dom";

import "./App.css";
import Footer from "./containers/Footer/Footer";
import { SettingsDialog } from "./containers/SettingsDialog/SettingsDialog";
import { useColorTheme } from "./hooks/useColorTheme";

function App() {
  const theme = useColorTheme();

  return (
    <div className="app-container" data-theme={theme}>
      <div className="app-main">
        <Outlet />
      </div>
      <Footer></Footer>
      <SettingsDialog />
    </div>
  );
}

export default App;
