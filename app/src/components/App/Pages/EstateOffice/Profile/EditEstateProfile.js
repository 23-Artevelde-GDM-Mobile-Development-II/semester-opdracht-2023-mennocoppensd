import { Link, useNavigate } from "react-router-dom";

import Title from "../../../../Design/Title/Title";
import useMutation from "../../../../../core/hooks/useMutation";
import ProfileForm from "./Form/EstateProfileForm";

const EditEstateProfile = ({ user, onUpdate, role }) => {
  const navigate = useNavigate();
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
      <Link to="/office">&lt; Back</Link>
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
