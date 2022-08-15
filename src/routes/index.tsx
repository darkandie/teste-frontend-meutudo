import { Routes, Route } from "react-router-dom";

import { Home, PeriodPage, ValuePage, EndPage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/values" element={<ValuePage />} />
      <Route path="/period" element={<PeriodPage />} />
      <Route path="/endpage" element={<EndPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
