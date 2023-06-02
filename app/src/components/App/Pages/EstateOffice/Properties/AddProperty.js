import { useNavigate } from "react-router-dom";
import useMutation from "../../../../../core/hooks/useMutation";
import Title from "../../../../Design/Title/Title";
import PropertyForm from "./Form/PropertyForm";
import useFetch from "../../../../../core/hooks/useFetch";
import Button from "../../../../Design/Button/Button";

const AddProperty = () => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();
  const { data: categories = [] } = useFetch("/categories");


  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/properties`, {
      method: "POST",
      data,
      onSuccess: () => {
        navigate(`/properties`);
      },
    });
  };

  const handleBackClick = () => {
    navigate(-1); // navigate to the previous page in the browser history
  };

  return (
    <>
      <Button onClick={handleBackClick}>&lt; Back</Button>
      <Title>Add property</Title>
      {error && <p>{error}</p>}
      <PropertyForm
        onSubmit={handleSubmit}
        isDisabled={isLoading}
        label="Create"
        categories={categories} // Pass the categories array as a prop
      />
    </>
  );
};

export default AddProperty;
