import { useState } from "react";

import Button from "../../../Design/Button/Button";
import Container from "../../../Design/Container/Container";
import Input from "../../../Design/Input/Input";
import Title from "../../../Design/Title/Title";
import useMutation from "../../../../core/hooks/useMutation";
import { Link } from "react-router-dom";


const LoginScreen = ({ onLogin }) => {

  const { isLoading, error, mutate } = useMutation();

  const [data, setData] = useState({
    username: "",
    password: "",
  });


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      data,
      onSuccess: (data) => {
        onLogin(data);
      },
    });
  };

  return (
    <Container>
      <Title>Sign in</Title>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <label htmlFor="username">Username</label>
        <Input name="username" value={data.username} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <Input name="password" type="password"  value={data.password} onChange={handleChange} />
        <Button type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </Container>
  );
};

export default LoginScreen;