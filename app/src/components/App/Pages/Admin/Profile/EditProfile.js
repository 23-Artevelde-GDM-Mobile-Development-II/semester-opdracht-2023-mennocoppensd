import { Link, useNavigate } from "react-router-dom";

import Title from "../../../../Design/Title/Title";
import useMutation from "../../../../../core/hooks/useMutation";
import ProfileForm from "./Form/ProfileForm";

const EditProfile = ({ user, onUpdate }) => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();

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
      <Link to="/admin">&lt; Back</Link>
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
