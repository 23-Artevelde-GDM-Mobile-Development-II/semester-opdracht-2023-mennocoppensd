import { useNavigate } from "react-router-dom";

import CategoryForm from "./Form/CategoryForm";
import Title from "../../../../Design/Title/Title";
import useMutation from "../../../../../core/hooks/useMutation";
import Button from "../../../../Design/Button/Button";

const AddCategory = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // navigate to the previous page in the browser history
  };

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
      <Button onClick={handleBackClick}>&lt; Back</Button>
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
