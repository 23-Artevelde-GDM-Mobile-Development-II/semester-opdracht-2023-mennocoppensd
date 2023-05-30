import { Link, useNavigate } from "react-router-dom";


import EstateOfficeForm from "./Form/EstateOfficeForm";
import Title from "../../../../Design/Title/Title";
import useMutation from "../../../../../core/hooks/useMutation";

const AddEstateOffice = () => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/estate-offices`, {
      method: "POST",
      data,
      onSuccess: () => {
        navigate(`/estate-offices`);
      },
    });
  };

  return (
    <>
      <Link to="/admin">&lt; Back</Link>
      <Title>Add estate office</Title>
      {error && <p>{error}</p>}
      <EstateOfficeForm
        onSubmit={handleSubmit}
        isDisabled={isLoading}
        label="Create"
      />
    </>
  );
};

export default AddEstateOffice;
