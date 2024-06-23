import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import App from "./App.jsx"
import "./index.css"
import ErrorPage from "./pages/ErrorPage.jsx"
import CreateIdeaPage from "./pages/CreateIdeaPage.jsx"
import HomePage from "./pages/HomePage.jsx"

const queryClient = new QueryClient()

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
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools />
  </QueryClientProvider>
  </React.StrictMode>
)
