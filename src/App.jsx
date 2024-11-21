import React from "react";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import ClientPage from "./components/ClientPage";
import ContactPage from "./components/ContactPage";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/work",
          element: <WorkPage />,
        },
        {
          path: "/client",
          element: <ClientPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
