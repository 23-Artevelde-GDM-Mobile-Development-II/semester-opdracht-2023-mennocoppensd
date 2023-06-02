import { useNavigate } from "react-router-dom";

import EstateOfficeForm from "./Form/EstateOfficeForm";

import Title from "../../../../Design/Title/Title";
import useMutation from "../../../../../core/hooks/useMutation";
import Button from "../../../../Design/Button/Button";

const EditEstateOffice = ({ estateOffice, onUpdate }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // navigate to the previous page in the browser history
  };
  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
    mutate(
      `${process.env.REACT_APP_API_URL}/estate-offices/${estateOffice._id}`,
      {
        method: "PATCH",
        data,
        onSuccess: () => {
          onUpdate();
          navigate(`/estate-offices/${estateOffice._id}`);
        },
      }
    );
  };

  return (
    <>
      <Button onClick={handleBackClick}>&lt; Back</Button>
      <Title>Edit estate office</Title>
      {error && <p>{error}</p>}
      <EstateOfficeForm
        onSubmit={handleSubmit}
        isDisabled={isLoading}
        label="Save"
        initialData={estateOffice}
      />
    </>
  );
};

export default EditEstateOffice;
