import { Link, useNavigate } from "react-router-dom";
import useMutation from "../../../../core/hooks/useMutation";
import Title from "../../../Design/Title/Title";
import PropertyForm from "./Form/PropertyForm";

const AddProperty = () => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/properties`, {
      method: "POST",
      data,
      onSuccess: () => {
        navigate(`/properties`);
      },
    });
  };

  return (
    <>
      <Link to="/">&lt; Back</Link>
      <Title>Add property</Title>
      {error && <p>{error}</p>}
      <PropertyForm
        onSubmit={handleSubmit}
        isDisabled={isLoading}
        label="Create"
      />
    </>
  );
};

export default AddProperty;
