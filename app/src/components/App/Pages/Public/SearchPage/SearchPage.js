import Header from "../../../../Design/Public/Header/Header";
import SearchForm from '../../../../Design/Public/SearchForm/SearchForm';
import Footer from "../../../../Design/Public/Footer/Footer";
import { useAuthContext } from "../../../Auth/AuthContainer";
import PublicPropertiesOverview from "../PublicPropertiesOverview";
import useFetch from "../../../../../core/hooks/useFetch";

// Landingpage = header (design) with app logic
const SearchPage = () => {
  const { user, logout } = useAuthContext();
  const { data: categories = [], isLoading, error } = useFetch("/categories");

  const handleLogout = () => {
    logout();
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Header onLogout={handleLogout} />
      <section>
        <h2>Search Properties</h2>
        <SearchForm categories={categories} />
        
      </section>
      <PublicPropertiesOverview userId={user._id} />
      <Footer />
    </>
  );

};

export default SearchPage;
