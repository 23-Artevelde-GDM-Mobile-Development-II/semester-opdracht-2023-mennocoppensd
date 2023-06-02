/* eslint-disable no-unused-vars */
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes, BasicRoutes, AgentRoutes, AdminRoutes, EstateRoutes } from "../../core/routes";

import AuthContainer, { useAuthContext } from "./Auth/AuthContainer";
import LandingPage from "./Pages/Public/LandingPage/LandingPage";
import SearchPage from "./Pages/Public/SearchPage/SearchPage";
import AddProperty from "./Pages/EstateOffice/Properties/AddProperty";

import PublicPropertyDetail from "./Pages/Public/Detail/PublicPropertyDetail";
import PropertiesOverview from "./Pages/EstateOffice/Properties/PropertiesOverview";
import PublicPropertiesOverview from "./Pages/Public/PublicPropertiesOverview";
import NotFound from "./Pages/NotFound/NotFound"
import UsersOverview from "./Pages/Admin/Users/UsersOverview";
import UserDetail from "./Pages/Admin/Users/Detail/UserDetail";
import AddUser from "./Pages/Admin/Users/AddUser";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import EstateOfficesOverview from "./Pages/Admin/EstateOffices/EstateOfficesOverview";
import EstateOfficeDetail from "./Pages/Admin/EstateOffices/Detail/EstateOfficeDetail";
import AddEstateOffice from "./Pages/Admin/EstateOffices/AddEstateOffice";
import CategoriesOverview from "./Pages/Admin/Categories/CategoriesOverview";
import CategoryDetail from "./Pages/Admin/Categories/Detail/CategoryDetail";
import AddCategory from "./Pages/Admin/Categories/AddCategory";
import FavoritesPage from "./Pages/LoggedIn/Favorites/FavoritesPage";
import UserChatPage from "./Pages/LoggedIn/UserChat/UserChat";

import EstateOfficeMessagesDashboard from "./Pages/EstateOffice/Chat/EstateOfficeMessagesDashboard";
import PropertyChats from "./Pages/EstateOffice/Chat/PropertyChats";
import EstateOfficeChatPage from "./Pages/EstateOffice/Chat/EstateOfficeChat/EstateOfficeChat";
import PropertyDetail from "./Pages/EstateOffice/Properties/Detail/PropertyDetail";
import EstateOfficeDashboard from "./Pages/EstateOffice/EstateOfficeDashboard";
import ProfileDetail from "./Pages/Admin/Profile/Detail/ProfileDetail";
import EstateProfileDetail from "./Pages/EstateOffice/Profile/Detail/EstateProfileDetail";

const App = () => {
  const { user } = useAuthContext() || { user: null };

  const isAdmin = user?.role === "ADMIN";
  const isEstateOffice = user?.role === "ESTATE OFFICE";
  return (
    <>
  
      {/* Header */}
        <Routes>
          {/* Auth */}
          {/* <Route path={AuthRoutes.Login} element={<LoginScreen />} /> */}
    {/* <Route path={AuthRoutes.Register} element={<RegisterScreen />} />  */}

    {/* Public */}
    <Route path={BasicRoutes.Index} element={isAdmin ? <AdminDashboard /> : isEstateOffice ? <EstateOfficeDashboard /> : <LandingPage />} />

    <Route path={BasicRoutes.Search} element={<SearchPage />} />
    <Route path="/public" element={<PublicPropertiesOverview/>} />
    <Route path="/public/:id/*" element={<PublicPropertyDetail />} />
    <Route path={BasicRoutes.Favorites} element={<AuthContainer> <FavoritesPage /> </AuthContainer>} />
    <Route path={BasicRoutes.UserChat} element={<AuthContainer> <UserChatPage /> </AuthContainer>} />
    <Route path={BasicRoutes.ProfileDetail} element={<AuthContainer><EstateProfileDetail user={user} /></AuthContainer>} />

      <Route path="/" element={<Navigate to="/" />} />
      
{/* localStorage.clear() in console om uit te loggen, nog een log uit knop voorzien */}

{isEstateOffice && (
<>
          {/* Estate Office Routes */}
        <Route path={EstateRoutes.Search} element={<SearchPage />} />
        <Route path={EstateRoutes.PropertiesOverview} element={<AuthContainer><PropertiesOverview /></AuthContainer>} />
        <Route path={EstateRoutes.PropertiesDetail} element={<AuthContainer><PropertyDetail /></AuthContainer>} />
        <Route path={EstateRoutes.AddProperty} element={<AuthContainer><AddProperty /></AuthContainer>} />
        <Route path={EstateRoutes.EstateOfficeChat} element={<AuthContainer><EstateOfficeChatPage /></AuthContainer>} />
        <Route path={EstateRoutes.EstateOfficeMessagesDashboard} element={<AuthContainer><EstateOfficeMessagesDashboard /></AuthContainer>} />
        <Route path={EstateRoutes.Dashboard} element={<AuthContainer><EstateOfficeDashboard /></AuthContainer>} />
        <Route path={EstateRoutes.PropertyChats} element={<AuthContainer> <PropertyChats /> </AuthContainer>} />
        <Route path={BasicRoutes.ProfileDetail} element={<AuthContainer><EstateProfileDetail user={user} /></AuthContainer>} />

        <Route path={EstateRoutes.EstateOfficesOverview} element={<AuthContainer><EstateOfficesOverview user={user} /></AuthContainer>} />
        <Route path={EstateRoutes.EstateOfficesDetail} element={<AuthContainer><EstateOfficeDetail /></AuthContainer>} />
        <Route path={EstateRoutes.AddEstateOffice} element={<AuthContainer><AddEstateOffice /></AuthContainer>} />

        <Route path={EstateRoutes.UsersOverview} element={<AuthContainer><UsersOverview /></AuthContainer>} />
        <Route path={EstateRoutes.UsersDetail} element={<AuthContainer><UserDetail /></AuthContainer>} />
        <Route path={EstateRoutes.AddUser} element={<AuthContainer><AddUser /></AuthContainer>} />
</>
)}
{isAdmin && (
<>
          {/* Admin */}
        <Route path={AdminRoutes.EstateOfficesOverview} element={<AuthContainer><EstateOfficesOverview /></AuthContainer>} />
        <Route path={AdminRoutes.EstateOfficesDetail} element={<AuthContainer><EstateOfficeDetail /></AuthContainer>} />
        <Route path={AdminRoutes.AddEstateOffice} element={<AuthContainer><AddEstateOffice /></AuthContainer>} />

        <Route path={AdminRoutes.dashboard} element={<AuthContainer><AdminDashboard /></AuthContainer>} />
        <Route path={EstateRoutes.PropertiesOverview} element={<AuthContainer><PropertiesOverview /></AuthContainer>} />
        <Route path={AdminRoutes.UsersOverview} element={<AuthContainer><UsersOverview /></AuthContainer>} />
        <Route path={AdminRoutes.UsersDetail} element={<AuthContainer><UserDetail /></AuthContainer>} />
        <Route path={AdminRoutes.AddUser} element={<AuthContainer><AddUser /></AuthContainer>} />
        <Route path={EstateRoutes.AddProperty} element={<AuthContainer><AddProperty /></AuthContainer>} />  
        <Route path={EstateRoutes.PropertiesDetail} element={<AuthContainer><PropertyDetail /></AuthContainer>} />

        <Route path={AdminRoutes.ProfileDetail} element={<AuthContainer><ProfileDetail user={user}/></AuthContainer>} />

        <Route path={AdminRoutes.CategoriesOverview} element={<AuthContainer><CategoriesOverview /></AuthContainer>} />
        <Route path={AdminRoutes.CategoriesDetail} element={<AuthContainer>< CategoryDetail /></AuthContainer>} />
        <Route path={AdminRoutes.AddCategory} element={<AuthContainer><AddCategory /></AuthContainer>} />
        </>
        )}
          {/* not found path */}
          <Route path={BasicRoutes.NotFound} element={<NotFound />} />
        </Routes>

        </>
    // Alle componenten waar geen login voor nodig is buiten AuthContainer
  );
};

export default App;
