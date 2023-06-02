import { useState } from "react";

import "./EstateProfileForm.css";
import Input from "../../../../../Design/Input/Input";
import Button from "../../../../../Design/Button/Button";
import { roles } from "../../../../../../core/modules/users/constants";
import { useAuthContext } from "../../../../Auth/AuthContainer";

const EstateProfileForm = ({
  onSubmit,
  isDisabled,
  label,
  initialData = {},
}) => {
  const { user } = useAuthContext() || { user: null };

  const isAdmin = user?.role === "ADMIN";
  const isEstateOffice = user?.role === "ESTATE OFFICE";

  const [data, setData] = useState({
    username: "",
    password: "",
    role: "",
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, type, value, checked, selectedOptions, files } = e.target;

    if (type === "checkbox") {
      setData({ ...data, [name]: checked });
    } else if (type === "file") {
      setData({ ...data, [name]: files });
    } else if (name === "type") {
      setData({ ...data, [name]: selectedOptions[0].value });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("role", data.role);

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <label htmlFor="username">Username</label>
      <Input name="username" value={data.username} onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <Input name="password" value={data.password} onChange={handleChange} />
      {isEstateOffice && isAdmin && (
        <>
          <label htmlFor="role">Role</label>
          <select
            name="role"
            value={data.role}
            onChange={handleChange}
            className="user-form-select"
          >
            <option value="">Select a role</option> {/* Add an empty option */}
            {roles.map((role, index) => (
              <option key={index} value={Object.values(role)[0]}>
                {Object.keys(role)[0]}
              </option>
            ))}
          </select>
        </>
      )}
      <br />

      <Button type="submit" disabled={isDisabled}>
        {label}
      </Button>
    </form>
  );
};

export default EstateProfileForm;
