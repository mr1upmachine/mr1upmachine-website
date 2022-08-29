import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import Footer from "./containers/Footer/Footer";
import { EventsContext } from "./services/events/events-context";
import { useEventsContext } from "./services/events/use-events-context";
import { useSettings } from "./services/settings/use-settings";

function App() {
  const eventsContext = useEventsContext();
  const settingsManager = useSettings();

  const [theme, setTheme] = useState(settingsManager.currentColorThemeValue);

  settingsManager.addColorThemeListener((colorTheme) => {
    setTheme(colorTheme);
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <EventsContext.Provider value={eventsContext}>
      <div className="app-container">
        <div className="app-main">
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
    </EventsContext.Provider>
  );
}

export default App;
