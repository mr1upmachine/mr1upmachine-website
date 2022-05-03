import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import Footer from "./containers/Footer/Footer";
import { SettingsManagerContext } from "./settings/settings-manager-context";

function App() {
  const settingsManager = useContext(SettingsManagerContext);

  const [theme, setTheme] = useState(settingsManager.currentColorThemeValue);

  const unlistenColorTheme = settingsManager.addColorThemeListener(
    (colorTheme) => {
      setTheme(colorTheme);
    }
  );

  // componentWillUnmount
  useEffect(() => {
    return () => {
      unlistenColorTheme();
    };
  }, [unlistenColorTheme]);

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
