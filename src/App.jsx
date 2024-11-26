import React from "react";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import ClientPage from "./components/ClientPage";
import ContactPage from "./components/ContactPage";
import Project1 from "./components/projects/Project1";
import Project2 from "./components/projects/Project2";
import Project3 from "./components/projects/Project3";
import Project4 from "./components/projects/Project4";

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
        {
          path: "/project1",
          element: <Project1 />,
        },
        {
          path: "/project2",
          element: <Project2 />,
        },
        {
          path: "/project3",
          element: <Project3 />,
        },
        {
          path: "/project4",
          element: <Project4 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
