import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Login from "../components/Login/Login";

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
          element: <LoginPage />,
        },
        {
          path: "signup",
          element: <SignupPage />,
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
        {
          path: "verify-shop",
          element: <VerifyShopPage />,
        },
        {
          path: "product/:id",
          element: <Product />,
        },
      ],
    },
  ]);
}

// auth
const LoginPage = Loadable(lazy(() => import("../components/Login/Login")));
const SignupPage = Loadable(lazy(() => import("../components/Signup/Signup")));

// main
const MainPage = Loadable(lazy(() => import("../pages/Home/Home")));
const VerifyShopPage = Loadable(
  lazy(() => import("../pages/VerifyShop/VeriShop"))
);
const Product = Loadable(
  lazy(() =>
    import("../components/Itemproperty/PicturesOfProduct/PicturesOfProduct")
  )
);

export default Router;
