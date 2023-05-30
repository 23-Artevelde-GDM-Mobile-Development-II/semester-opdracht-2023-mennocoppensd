import { Link, useNavigate } from "react-router-dom";

import CategoryForm from "./Form/CategoryForm";

import Title from "../../../../Design/Title/Title";
import useMutation from "../../../../../core/hooks/useMutation";

const EditCategory = ({ category, onUpdate }) => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/categories/${category._id}`, {
      method: "PATCH",
      data,
      onSuccess: () => {
        onUpdate();
        navigate(`/categories/${category._id}`);
      },
    });
  };

  return (
    <>
      <Link to="/admin">&lt; Back</Link>
      <Title>Edit category</Title>
      {error && <p>{error}</p>}
      <CategoryForm
        onSubmit={handleSubmit}
        isDisabled={isLoading}
        label="Save"
        initialData={category}
      />
    </>
  );
};

export default EditCategory;
