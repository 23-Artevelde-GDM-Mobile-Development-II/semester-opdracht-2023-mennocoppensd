import { Link, useNavigate } from "react-router-dom";

import EstateOfficeForm from "./Form/EstateOfficeForm";

import Title from "../../../../Design/Title/Title";
import useMutation from "../../../../../core/hooks/useMutation";

const EditEstateOffice = ({ estateOffice, onUpdate }) => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/estate-offices/${estateOffice._id}`, {
      method: "PATCH",
      data,
      onSuccess: () => {
        onUpdate();
        navigate(`/estate-offices/${estateOffice._id}`);
      },
    });
  };

  return (
    <>
      <Link to="/admin">&lt; Back</Link>
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
