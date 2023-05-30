import { Link, useNavigate } from "react-router-dom";


import CategoryForm from "./Form/CategoryForm";
import Title from "../../../../Design/Title/Title";
import useMutation from "../../../../../core/hooks/useMutation";

const AddCategory = () => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/categories`, {
      method: "POST",
      data,
      onSuccess: () => {
        navigate(`/categories`);
      },
    });
  };

  return (
    <>
      <Link to="/admin">&lt; Back</Link>
      <Title>Add category</Title>
      {error && <p>{error}</p>}
      <CategoryForm
        onSubmit={handleSubmit}
        isDisabled={isLoading}
        label="Create"
      />
    </>
  );
};

export default AddCategory;
