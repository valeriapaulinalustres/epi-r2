import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, memo, Suspense } from "react";
import MainSpinner from "../components/spinners/MainSpinner";
import PrivateLayout from "../layout/navBar/PrivateLayout";


const isAuthenticated = false; 

const LoginRouter = memo(lazy(() => import("./LoginRouter.router")));
const NotFound = memo(lazy(() => import("../pages/special/NotFound")));
const DashboardRouter = memo(lazy(() => import("./DashboardRouter.router")));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<MainSpinner />}>
        <Routes>
         
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
          />

          <Route path="/login/*" element={<LoginRouter />} />

          <Route element={<PrivateLayout />}>
            <Route path="/dashboard/*" element={<DashboardRouter />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
