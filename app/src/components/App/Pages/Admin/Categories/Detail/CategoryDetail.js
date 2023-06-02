import { Route, Routes, useParams } from "react-router-dom";

import EditCategory from "../EditCategory";
import CategoryInfo from "./CategoryInfo";
import useFetch from "../../../../../../core/hooks/useFetch";
import Loading from "../../../../../Design/Loading/Loading";

const CategoryDetail = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    invalidate,
    data: category,
  } = useFetch(`/categories/${id}`);

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
        element={<EditCategory category={category} onUpdate={handleUpdate} />}
      />
      <Route index element={<CategoryInfo category={category} />} />
    </Routes>
  );
};

export default CategoryDetail;
