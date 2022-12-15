import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./containers/Home/Home";
import PartyArea from "./containers/PartyArea/PartyArea";
// import Settings from "./containers/Settings/Settings";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="party" element={<PartyArea />} />
          {/* <Route path="settings" element={<Settings />} /> */}
          <Route path="*" element={<Navigate to="" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Outlet />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
