import { useNavigate } from "react-router-dom";

import EstateOfficeForm from "./Form/EstateOfficeForm";
import Title from "../../../../Design/Title/Title";
import useMutation from "../../../../../core/hooks/useMutation";
import Button from "../../../../Design/Button/Button";

const AddEstateOffice = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // navigate to the previous page in the browser history
  };

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
      <Button onClick={handleBackClick}>&lt; Back</Button>
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
