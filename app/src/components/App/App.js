/* eslint-disable no-unused-vars */
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes, BasicRoutes, AgentRoutes, AdminRoutes, EstateRoutes } from "../../core/routes";
import Container from "../Design/Container/Container";
import AuthContainer from "./Auth/AuthContainer";
import LoginScreen from "./Auth/Login/LoginScreen";
import RegisterScreen from "./Auth/Register/RegisterScreen";
import LandingPage from "./Pages/Public/LandingPage/LandingPage";
import SearchPage from "./Pages/Public/SearchPage/SearchPage";
import AddProperty from "./Pages/EstateOffice/AddProperty";
import PropertyDetail from "./Pages/EstateOffice/Detail/PropertyDetail";
import PublicPropertyDetail from "./Pages/Public/Detail/PublicPropertyDetail";
import PropertiesOverview from "./Pages/EstateOffice/PropertiesOverview";
import PublicPropertiesOverview from "./Pages/Public/PublicPropertiesOverview";
import NotFound from "./Pages/NotFound/NotFound"

const App = () => {
  return (
    <AuthContainer>
      {/* Header */}
        <Routes>

      
{/* localStorage.clear() in console om uit te loggen, nog een log uit knop voorzien */}

          {/* Public */}
        <Route path={BasicRoutes.Index} element={<LandingPage />} />
        <Route path={BasicRoutes.Search} element={<SearchPage />} />
        <Route path="/public" element={<PublicPropertiesOverview/>} />
        <Route path="/public/:id/*" element={<PublicPropertyDetail />} />

          <Route path="/" element={<Navigate to="/" />} />

          {/* Estate Office */}
        <Route path={EstateRoutes.Search} element={<SearchPage />} />
          <Route path="/properties" element={<PropertiesOverview />} />
          <Route path="/properties/:id/*" element={<PropertyDetail />} />
          <Route path="/properties/add" element={<AddProperty />} />
          
          {/* not found path */}
          <Route path={BasicRoutes.NotFound} element={<NotFound />} />
        </Routes>

    </AuthContainer>
    // Alle componenten waar geen login voor nodig is buiten AuthContainer
  );
};

export default App;
