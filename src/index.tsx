import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router';
import { marked } from 'marked';

import packageJSON from '../package.json';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './containers/Home/Home';
import Markdown from './containers/Markdown/Markdown';
import RecipeList from './containers/RecipeList/RecipeList';
import Recipe from './containers/Recipe/Recipe';

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
          <Route path="recipes" element={<RecipeList />} />
          <Route
            path="recipes/:recipeName"
            element={
              <Recipe>
                <Markdown assetPath="/assets/recipes/:recipeName" className="recipe-markdown" />
              </Recipe>
            }
          />
          <Route path="*" element={<Navigate to="" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Outlet />
  </StrictMode>
);

const renderer = new marked.Renderer();
renderer.link = ({ href, title, text }) =>
  `<a target="_blank" href="${href}" ${title ? 'title="' + title + '"' : ''}>${text}</a>`;
marked.use({ renderer, gfm: true });

window.VERSION = packageJSON.version;
window.DEPENDENCIES = packageJSON.dependencies;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
