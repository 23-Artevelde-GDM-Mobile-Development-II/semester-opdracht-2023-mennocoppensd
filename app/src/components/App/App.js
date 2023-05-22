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
import PropertiesOverview from "./Pages/EstateOffice/PropertiesOverview";

const App = () => {
  return (
    <AuthContainer>
        <Routes>

        {/* Login screen */ }
        <Route path={AuthRoutes.Login} element={<LoginScreen />} />
        <Route path={AuthRoutes.Register} element={<RegisterScreen />} />

          {/* Public */}
        <Route path={BasicRoutes.Index} element={<LandingPage />} />
        <Route path={EstateRoutes.Search} element={<SearchPage />} />
          <Route path="/properties" element={<PropertiesOverview />} />
          <Route path="/properties/:id/*" element={<PropertyDetail />} />
          <Route path="/properties/add" element={<AddProperty />} />
          <Route path="/" element={<Navigate to="/" />} />

        </Routes>

    </AuthContainer>
  );
};

export default App;
