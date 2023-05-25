import { Route, Routes, useParams } from "react-router-dom";
import Loading from "../../../../Design/Loading/Loading";
import PublicProperty from "../PublicProperty";
import Header from "../../../../Design/Public/Header/Header";
import PropertyInfo from "./PublicPropertyInfo";
import useFetch from "../../../../../core/hooks/useFetch";

const PublicPropertyDetail = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: property,
  } = useFetch(`/properties/${id}`);


  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      {/* <Header/> */}
      <Route
        path="public"
        element={<PublicProperty property={property} />}
      />
      <Route index element={<PropertyInfo property={property} />} />
    </Routes>
  );
};

export default PublicPropertyDetail;