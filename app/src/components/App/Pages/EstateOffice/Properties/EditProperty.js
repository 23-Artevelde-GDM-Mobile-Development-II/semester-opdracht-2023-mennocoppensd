import { Link, useNavigate } from "react-router-dom";

import PropertyForm from "./Form/PropertyForm";
import useMutation from "../../../../../core/hooks/useMutation";
import Title from "../../../../Design/Title/Title";


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

  return (
    <>
      <Link to="/admin">&lt; Back</Link>
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
