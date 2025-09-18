import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "../src/store/store.js";
import Projects from "./page/Projects.jsx";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Reviewer from "./page/Reviewer.jsx";
import Contact from "./page/Contact.jsx";
import ViewProject from "./page/ViewProject.jsx";
import Dsa from "./page/Dsa.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import Home_Dashboard from "./dashboard/pages/Home_Dashboard.jsx";
import AllProject from "./dashboard/pages/AllProject.jsx";
import Review from "./dashboard/pages/Review.jsx";
import Message from "./dashboard/pages/Message.jsx";

import AddProject from "./dashboard/pages/AddProject.jsx";
import UpdateProject from "./dashboard/pages/UpdateProject.jsx";

import AddReview from "./dashboard/pages/AddReview.jsx";
import UpdateReview from "./dashboard/pages/UpdateReview.jsx";
import AllDsa from "./dashboard/pages/AllDsa.jsx";
import UpdateDsa from "./dashboard/pages/UpdateDsa.jsx";
import AddDsa from "./dashboard/pages/AddDsa.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "project/:id", // Use a relative path for Home
        element: <ViewProject />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/reviews",
        element: <Reviewer />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/view",
        element: <ViewProject />,
      },
      {
        path: "/dsa",
        element: <Dsa />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "", // Use a relative path for Home
        element: <Home_Dashboard />,
      },
      {
        path: "projects", // Use a relative path for Home
        element: <AllProject />,
      },

      {
        path: "reviews", // Use a relative path for Home
        element: <Review />,
      },

      {
        path: "message", // Use a relative path for Home
        element: <Message />,
      },

      {
        path: "add project", // Use a relative path for Home
        element: <AddProject />,
      },

      {
        path: "update project/:id", // Use a relative path for Home
        element: <UpdateProject />,
      },
      {
        path: "add review", // Use a relative path for Home
        element: <AddReview />,
      },

      {
        path: "update review/:id", // Use a relative path for Home
        element: <UpdateReview />,
      },
      {
        path: "dsa", // Use a relative path for Home
        element: <AllDsa />,
      },
      {
        path: "add dsa", // Use a relative path for Home
        element: <AddDsa />,
      },
      {
        path: "update dsa/:id", // Use a relative path for Home
        element: <UpdateDsa />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
