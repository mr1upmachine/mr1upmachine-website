import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router';
import { marked } from 'marked';

import packageJSON from '../package.json';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './containers/Home/Home';
import Recipes from './containers/Recipes/Recipes';

declare global {
  interface Window {
    VERSION: string;
    DEPENDENCIES: Record<string, string>;
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
          <Route path="recipes/:recipeName" element={<Recipes />} />
          <Route path="*" element={<Navigate to="" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Outlet />
  </StrictMode>
);

const renderer = new marked.Renderer();
// renderer.link = ({ href, text }) => {
//   return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
// };
renderer.list = ({ items, ordered }) => {
  const tag = ordered ? 'ol' : 'ul';
  const tagClass = ordered ? 'tw-list-decimal' : 'tw-list-disc';
  const itemsHTML = items.map((item) => `<li>${item.text}</li>`).join('');
  return `<${tag} class="tw-ml-3 tw-list-inside ${tagClass}">${itemsHTML}</${tag}>`;
};
marked.use({ renderer, gfm: true });

window.VERSION = packageJSON.version;
window.DEPENDENCIES = packageJSON.dependencies;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
