import Header from "../../../../Design/Public/Header/Header";
import Hero from "../../../../Design/Public/Hero/Hero";
import FeaturedProperties from '../../../../Design/Public/FeaturedProperties/FeaturedProperties';
import HowItWorks from "../../../../Design/Public/HowItWorks/HowItWorks";
import Testimonials from "../../../../Design/Public/Testimonials/Testimonials";
import ContactUs from "../../../../Design/Public/ContactUs/ContactUs";
import Footer from "../../../../Design/Public/Footer/Footer";
import { useAuthContext } from "../../../Auth/AuthContainer";
import MapWithHeading from "../../Map/MapWithHeading";

// Landingpage = header (design) with app logic
const LandingPage = () => {
  const { logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Header onLogout={handleLogout} />
      <Hero />
      {/* <section>
        <h2>Search Properties</h2>
        <SearchForm />
      </section> */}
      <FeaturedProperties />
      <MapWithHeading />
      <HowItWorks />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );

};

export default LandingPage;
