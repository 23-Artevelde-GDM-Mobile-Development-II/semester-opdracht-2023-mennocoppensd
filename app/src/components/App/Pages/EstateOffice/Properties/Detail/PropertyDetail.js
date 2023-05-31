import { Route, Routes, useParams } from "react-router-dom";

import EditProperty from "../EditProperty";
import PropertyInfo from "./PropertyInfo";
import Loading from "../../../../../Design/Loading/Loading";
import useFetch from "../../../../../../core/hooks/useFetch";


const PropertyDetail = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    invalidate,
    data: property,
  } = useFetch(`/properties/${id}`);

  const handleUpdate = () => {
    invalidate();
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading/>;
  }

  return (
    <Routes>
      <Route
        path="edit"
        element={<EditProperty property={property} onUpdate={handleUpdate} />}
      />
      <Route index element={<PropertyInfo property={property} />} />
    </Routes>
  );
};

export default PropertyDetail;
