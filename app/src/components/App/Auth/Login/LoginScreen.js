import { useState } from "react";
import Button from "../../../Design/Button/Button";
import Input from "../../../Design/Input/Input";
import Title from "../../../Design/Title/Title";
import useMutation from "../../../../core/hooks/useMutation";
import { Link } from "react-router-dom";
import styles from "./LoginScreen.module.css";

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
    <div className={styles.containerLogin}>
      <Link to="/" className={styles.linkBack}>
        &lt; Back
      </Link>
      <Title className={styles.title}>Sign in</Title>
      {/* <img src="./favicon.png" alt="My App Logo" width="30" height="30" /> */}
      <div className={styles["form-container"]}>
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <label htmlFor="username">Username / Email</label>
          <Input
            name="username"
            value={data.username}
            onChange={handleChange}
            onLogin={onLogin}
          />
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            type="password"
            value={data.password}
            onChange={handleChange}
            onLogin={onLogin}
          />
          <Button
            className="btn-login"
            type="submit"
            disabled={isLoading}
            onLogin={onLogin}
          >
            Login
          </Button>
        </form>
      </div>
      <div className={styles["register-link-container"]}>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
