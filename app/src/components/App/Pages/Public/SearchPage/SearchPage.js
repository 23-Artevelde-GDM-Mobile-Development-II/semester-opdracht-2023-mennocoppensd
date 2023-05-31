import Header from "../../../../Design/Public/Header/Header";
import SearchForm from '../../../../Design/Public/SearchForm/SearchForm';
import Footer from "../../../../Design/Public/Footer/Footer";
import { useAuthContext } from "../../../Auth/AuthContainer";
import PublicPropertiesOverview from "../PublicPropertiesOverview";
import useFetch from "../../../../../core/hooks/useFetch";
import { useState } from "react";

// Landingpage = header (design) with app logic
const SearchPage = () => {
  const { user, logout } = useAuthContext();
  const { data: categories = [], isLoading, error } = useFetch("/categories");

  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("");
  const [saleType, setSaleType] = useState("all");

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
        <SearchForm categories={categories} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setOrder={setOrder} setSaleType={setSaleType} />

        
      </section>
      <PublicPropertiesOverview userId={user._id} searchTerm={searchTerm} order={order} saleType={saleType} />
      <Footer />
    </>
  );

};

export default SearchPage;
