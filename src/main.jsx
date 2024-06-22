import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App.jsx"
import "./index.css"
import ErrorPage from "./pages/ErrorPage.jsx"
import CreateIdeaPage from "./pages/CreateIdeaPage.jsx"
import HomePage from "./pages/HomePage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/ideas/create",
        element: <CreateIdeaPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
