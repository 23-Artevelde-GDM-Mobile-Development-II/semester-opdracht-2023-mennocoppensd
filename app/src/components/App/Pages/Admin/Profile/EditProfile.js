import { useNavigate } from "react-router-dom";

import Title from "../../../../Design/Title/Title";
import useMutation from "../../../../../core/hooks/useMutation";
import ProfileForm from "./Form/ProfileForm";
import Button from "../../../../Design/Button/Button";

const EditProfile = ({ user, onUpdate, role }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // navigate to the previous page in the browser history
  };
  const { isLoading, error, mutate } = useMutation();
  // const backLink = role === 'ADMIN' ? "/admin" : "/estate-office";

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

export default EditProfile;
