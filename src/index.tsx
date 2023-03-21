import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

import packageJSON from '../package.json';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './containers/Home/Home';
import PartyArea from './containers/PartyArea/PartyArea';

declare global {
  interface Window {
    VERSION: string;
  }
}
const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Something went VERY wrong. Root element is not defined.');
}

const root = createRoot(rootEl);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="party" element={<PartyArea />} />
          <Route path="*" element={<Navigate to="" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Outlet />
  </StrictMode>
);

window.VERSION = packageJSON.version;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
