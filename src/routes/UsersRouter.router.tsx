import { lazy, memo } from "react";
import { Route, Routes } from "react-router-dom";

const Users = memo(lazy(() => import("../pages/users")));
const NotFound = memo(lazy(() => import("../pages/special/NotFound")));

const UsersRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UsersRouter;
