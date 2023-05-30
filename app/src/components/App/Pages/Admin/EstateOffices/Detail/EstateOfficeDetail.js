import { Route, Routes, useParams } from "react-router-dom";

import EditEstateOffice from "../EditEstateOffice";
import EstateOfficeInfo from "./EstateOfficeInfo";
import useFetch from "../../../../../../core/hooks/useFetch";
import Loading from "../../../../../Design/Loading/Loading";


const EstateOfficeDetail = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    invalidate,
    data: estateOffice,
  } = useFetch(`/estate-offices/${id}`);

  const handleUpdate = () => {
    invalidate();
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route
        path="edit"
        element={<EditEstateOffice estateOffice={estateOffice} onUpdate={handleUpdate} />}
      />
      <Route index element={<EstateOfficeInfo estateOffice={estateOffice} />} />
    </Routes>
  );
};

export default EstateOfficeDetail;
