import { lazy, memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Login = memo(lazy(() => import("../pages/login")));
const NotFound = memo(lazy(() => import("../pages/special/NotFound")));
const MainSpinner = memo(
  lazy(() => import("../components/spinners/MainSpinner"))
);

const LoginRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default LoginRouter;
