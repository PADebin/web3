import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "components/App/App";
import HomePage from "components/Pages/HomePage";
import CinemaPage from "components/Pages/CinemaPage";
import MovieListPage from "components/Pages/MovieListPage";
import "antd/dist/reset.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "cinema", element: <CinemaPage /> },
      { path: "movies", element: <MovieListPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
