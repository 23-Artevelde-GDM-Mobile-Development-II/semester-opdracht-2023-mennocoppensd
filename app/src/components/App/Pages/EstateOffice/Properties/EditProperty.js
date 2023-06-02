import { useNavigate } from "react-router-dom";

import PropertyForm from "./Form/PropertyForm";
import useMutation from "../../../../../core/hooks/useMutation";
import Title from "../../../../Design/Title/Title";
import Button from "../../../../Design/Button/Button";


const EditProperty = ({ property, onUpdate }) => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/properties/${property._id}`, {
      method: "PATCH",
      data,
      onSuccess: () => {
        onUpdate();
        navigate(`/properties/${property._id}`);
      },
    });
  };

  const handleBackClick = () => {
    navigate(-1); // navigate to the previous page in the browser history
  };

  return (
    <>
      <Button onClick={handleBackClick}>&lt; Back</Button>
      <Title>Edit property</Title>
      {error && <p>{error}</p>}
      <PropertyForm
        onSubmit={handleSubmit}
        isDisabled={isLoading}
        label="Save"
        initialData={property}
      />
    </>
  );
};

export default EditProperty;
