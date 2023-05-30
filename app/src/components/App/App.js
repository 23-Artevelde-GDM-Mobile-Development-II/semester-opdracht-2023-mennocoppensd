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
import UsersOverview from "./Pages/Admin/Users/UsersOverview";
import UserDetail from "./Pages/Admin/Users/Detail/UserDetail";
import AddUser from "./Pages/Admin/Users/AddUser";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import EstateOfficesOverview from "./Pages/Admin/EstateOffices/EstateOfficesOverview";
import EstateOfficeDetail from "./Pages/Admin/EstateOffices/Detail/EstateOfficeDetail";
import AddEstateOffice from "./Pages/Admin/EstateOffices/AddEstateOffice";

const App = () => {
  return (
    <AuthContainer>
      {/* Header */}
        <Routes>

          {/* Auth */}
          {/* <Route path={AuthRoutes.Login} element={<LoginScreen />} />
          <Route path={AuthRoutes.Register} element={<RegisterScreen />} /> */}

      {/* Public */}
    <Route path={BasicRoutes.Index} element={<LandingPage />} />
    <Route path={BasicRoutes.Search} element={<SearchPage />} />
    <Route path="/public" element={<PublicPropertiesOverview/>} />
    <Route path="/public/:id/*" element={<PublicPropertyDetail />} />

      <Route path="/" element={<Navigate to="/" />} />
      
{/* localStorage.clear() in console om uit te loggen, nog een log uit knop voorzien */}


          {/* Estate Office Routes */}
        <Route path={EstateRoutes.Search} element={<SearchPage />} />
        <Route path={EstateRoutes.PropertiesOverview} element={<AuthContainer><PropertiesOverview /></AuthContainer>} />
        <Route path={EstateRoutes.PropertiesDetail} element={<AuthContainer><PropertyDetail /></AuthContainer>} />
        <Route path={EstateRoutes.AddProperty} element={<AuthContainer><AddProperty /></AuthContainer>} />

          {/* Admin */}
        <Route path={AdminRoutes.EstateOfficesOverview} element={<AuthContainer><EstateOfficesOverview /></AuthContainer>} />
        <Route path={AdminRoutes.EstateOfficesDetail} element={<AuthContainer><EstateOfficeDetail /></AuthContainer>} />
        <Route path={AdminRoutes.AddEstateOffice} element={<AuthContainer><AddEstateOffice /></AuthContainer>} />

        <Route path={AdminRoutes.dashboard} element={<AuthContainer><AdminDashboard /></AuthContainer>} />
        <Route path={AdminRoutes.UsersOverview} element={<AuthContainer><UsersOverview /></AuthContainer>} />
        <Route path={AdminRoutes.UsersDetail} element={<AuthContainer><UserDetail /></AuthContainer>} />
        <Route path={AdminRoutes.AddUser} element={<AuthContainer><AddUser /></AuthContainer>} />
          
          {/* not found path */}
          <Route path={BasicRoutes.NotFound} element={<NotFound />} />
        </Routes>

    </AuthContainer>
    // Alle componenten waar geen login voor nodig is buiten AuthContainer
  );
};

export default App;
