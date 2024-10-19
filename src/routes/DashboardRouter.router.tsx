import { lazy, memo } from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = memo(lazy(() => import("../pages/dashboard")));
const NotFound = memo(lazy(() => import("../pages/special/NotFound")));

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default DashboardRouter;
