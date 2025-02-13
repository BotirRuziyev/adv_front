import { Routes, Route } from 'react-router-dom';
import CampaignsPage from "./pages/CampaignsPage"


const AdvRoutes = () => {
  return (
    <Routes>
      <Route path="campaigns" element={<CampaignsPage />} />
    </Routes>
  );
};

export default AdvRoutes;
