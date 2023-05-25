import { useState } from "react";

import Button from "../../../Design/Button/Button";

import Input from "../../../Design/Input/Input";
import Title from "../../../Design/Title/Title";
import useMutation from "../../../../core/hooks/useMutation";
import { Link } from "react-router-dom";

import styles from "./RegisterScreen.module.css";

const RegisterScreen = ({ onLogin }) => {
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
    <div className={styles.containerRegister}>
            <Link to="/" className={styles.linkBack}>&lt; Back</Link>
      <Title className={styles.title}>Register</Title>
      <div className={styles["form-container"]}>
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <label htmlFor="username">Username / Email</label>
          <Input name="username" value={data.username} onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <Input name="password" type="password" value={data.password} onChange={handleChange} />
          <Button className="btn-register"type="submit" disabled={isLoading}>
            Register
          </Button>
        </form>
      </div>
      <div className={styles["signin-link-container"]}>
        <p>
         Already have an account? <Link to="/login">Sign in here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;