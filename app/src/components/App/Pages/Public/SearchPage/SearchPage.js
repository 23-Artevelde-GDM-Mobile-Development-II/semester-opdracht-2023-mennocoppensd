import Header from "../../../../Design/Public/Header/Header";
import SearchForm from '../../../../Design/Public/SearchForm/SearchForm';
import Footer from "../../../../Design/Public/Footer/Footer";
import { useAuthContext } from "../../../Auth/AuthContainer";
import PropertiesOverview from "../../EstateOffice/PropertiesOverview";

// Landingpage = header (design) with app logic
const SearchPage = () => {
  const { logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Header onLogout={handleLogout} />
      <section>
        <h2>Search Properties</h2>
        <SearchForm />
        
      </section>
      <PropertiesOverview />
      <Footer />
    </>
  );

};

export default SearchPage;
