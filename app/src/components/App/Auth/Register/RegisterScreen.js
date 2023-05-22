import { useState } from "react";

import Button from "../../../Design/Button/Button";
import Container from "../../../Design/Container/Container";
import Input from "../../../Design/Input/Input";
import Title from "../../../Design/Title/Title";
import useMutation from "../../../../core/hooks/useMutation";

const RegisterScreen = ({ onRegister }) => {

  const { isLoading, error, mutate } = useMutation();

  const [data, setData] = useState({
    username: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      data,
      onSuccess: (data) => {
        onRegister(data);
      },
    });
  };

  return (
    <Container>
      <Title>Register</Title>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <label htmlFor="username">Username</label>
        <Input name="username" value={data.username} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <Input name="password" type="password"  value={data.password} onChange={handleChange} />
        <Button type="submit" disabled={isLoading}>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegisterScreen;
