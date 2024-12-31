import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Loader from "../components/Loader";

const lazyLoad = (importFunc) => (
  <Suspense fallback={<Loader />}>
    {React.createElement(lazy(importFunc))}
  </Suspense>
);

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: lazyLoad(() => import("../pages/HomePage")),
      },
      {
        path: "/about",
        element: lazyLoad(() => import("../pages/AboutPage")),
      },
      {
        path: "/events",
        element: lazyLoad(() => import("../pages/EventsPage")),
      },
      {
        path: "/affiliations",
        element: lazyLoad(() => import("../pages/AffiliationsPage")),
      },
      {
        path: "/blogs",
        element: lazyLoad(() => import("../pages/BlogPage")),
      },
      {
        path: "/players",
        element: lazyLoad(() => import("../pages/PlayerDetailsPage")),
      },
      {
        path: "/players/:id",
        element: lazyLoad(() => import("../pages/PlayerPersonalDetails")),
      },
      {
        path: "/contact",
        element: lazyLoad(() => import("../pages/ContactPage")),
      },
      {
        path: "/grind",
        element: lazyLoad(() => import("../pages/GrindPage")),
      },
      {
        path: "/kpro",
        element: lazyLoad(() => import("../pages/KproPage")),
      },
      {
        path: "/eon",
        element: lazyLoad(() => import("../pages/EonPage")),
      },
      {
        path: "/eryx",
        element: lazyLoad(() => import("../pages/EryxPage")),
      },
      {
        path: "/iris",
        element: lazyLoad(() => import("../pages/IrisPage")),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default routes;
