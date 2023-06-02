import { useNavigate } from "react-router-dom";

import Title from "../../../../Design/Title/Title";
import useMutation from "../../../../../core/hooks/useMutation";
import ProfileForm from "./Form/EstateProfileForm";
import Button from "../../../../Design/Button/Button";

const EditEstateProfile = ({ user, onUpdate }) => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();

  const handleBackClick = () => {
    navigate(-1); // navigate to the previous page in the browser history
  };

  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/users/${user._id}`, {
      method: "PATCH",
      data,
      onSuccess: () => {
        onUpdate();
        navigate(`/users/${user._id}`);
      },
    });
  };

  return (
    <>
      <Button onClick={handleBackClick}>&lt; Back</Button>
      <Title>Edit profile</Title>
      {error && <p>{error}</p>}
      <ProfileForm
        onSubmit={handleSubmit}
        isDisabled={isLoading}
        label="Save"
        initialData={user}
      />
    </>
  );
};

export default EditEstateProfile;
