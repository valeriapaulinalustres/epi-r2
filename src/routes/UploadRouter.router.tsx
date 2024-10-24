import { lazy, memo } from "react";
import { Route, Routes } from "react-router-dom";

const Upload = memo(lazy(() => import("../pages/upload")));
const NotFound = memo(lazy(() => import("../pages/special/NotFound")));

const UploadRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Upload />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UploadRouter;
