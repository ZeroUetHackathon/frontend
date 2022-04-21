import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

function Router() {
  return useRoutes([
    // auth routes
    {
      path: "/auth",
      // element: {}
      children: [
        {
          path: "login",
          element: <AuthPage />,
        },
        {
          path: "forgot-password",
        },
        {
          path: "reset-password",
        },
      ],
    },

    // main routes
    {
      path: "/",
      //   element: <MainPage />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
      ],
    },
  ]);
}

const AuthPage = Loadable(lazy(() => import("../pages/Auth/Auth")));
const MainPage = Loadable(lazy(() => import("../pages/Home/Home")));

export default Router;
