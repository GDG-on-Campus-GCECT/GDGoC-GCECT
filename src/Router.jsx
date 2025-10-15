import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Import the layout and page components
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import EventsPage from "./pages/events/EventsPage";
import TeamPage from "./pages/team/TeamPage";
import ContactUsPage from "./pages/contactUs/ContactUsPage";
import ProgressboardPage from "./pages/progressboard/progressboardPage";

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // The Layout component wraps all pages
    children: [
      {
        index: true, // This makes Home the default page for the '/' path
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "progressboard",
        element: <ProgressboardPage />,
      },
      {
        path: "team",
        element: <TeamPage />,
      },
      {
        path: "contact",
        element: <ContactUsPage />,
      },
    ],
  },
]);

export default router;
