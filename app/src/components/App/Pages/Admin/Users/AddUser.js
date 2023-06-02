import { Link, useNavigate } from "react-router-dom";

import UserForm from "./Form/UserForm";
import Title from "../../../../Design/Title/Title";
import useMutation from "../../../../../core/hooks/useMutation";

const AddUser = () => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/users`, {
      method: "POST",
      data,
      onSuccess: () => {
        navigate(`/users`);
      },
    });
  };

  return (
    <>
      <Link to="/">&lt; Back</Link>
      <Title>Add user</Title>
      {error && <p>{error}</p>}
      <UserForm onSubmit={handleSubmit} isDisabled={isLoading} label="Create" />
    </>
  );
};

export default AddUser;
