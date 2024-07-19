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
    path: '/',
    children: [
      {
        path: '/',
        element: lazyLoad(() => import("../pages/HomePage")),
      },
      {
        path: '/About',
        element: lazyLoad(() => import("../pages/AboutPage")),
      },
      {
        path: '/Events',
        element: lazyLoad(() => import("../pages/EventsPage")),
      },
      {
        path: '/Affiliations',
        element: lazyLoad(() => import("../pages/AffiliationsPage")),
      },
      {
        path: '/Blogs',
        element: lazyLoad(() => import("../pages/BlogPage")),
      },
      {
        path: '/Contact',
        element: lazyLoad(() => import("../pages/ContactPage")),
      },
      {
        path: '/Grind',
        element: lazyLoad(() => import("../pages/GrindPage")),
      },
      {
        path: '/K-Pro',
        element: lazyLoad(() => import("../pages/KproPage")),
      },
      {
        path: '/Eon',
        element: lazyLoad(() => import("../pages/EonPage")),
      },
      {
        path: '/Eryx',
        element: lazyLoad(() => import("../pages/EryxPage")),
      },
      {
        path: '/Iris',
        element: lazyLoad(() => import("../pages/IrisPage")),
      },
    ],
    errorElement: <ErrorPage />
  },
]);

export default routes;
