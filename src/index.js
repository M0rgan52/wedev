import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/styles/index.css";
import App from "./components/App";
import ErrorPage from "./error-page";
import reportWebVitals from "./reportWebVitals";
import LegalNotice from "./routes/legal";
import Groupomania from './routes/groupomania';
import Ohmyfood from "./routes/ohmyfood";
import Agencelapanthere from "./routes/agencelapanthere";
import Piiquante from './routes/piiquante';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "legalnotice",
    element: <LegalNotice />,
  },

  {
    path: "ohmyfood",
    element: <Ohmyfood />
  },

  {
    path: "agencelapanthere",
    element: <Agencelapanthere />
  },

  {
    path: "piiquante",
    element: <Piiquante />
  },

  {
    path: "groupomania",
    element: <Groupomania />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
