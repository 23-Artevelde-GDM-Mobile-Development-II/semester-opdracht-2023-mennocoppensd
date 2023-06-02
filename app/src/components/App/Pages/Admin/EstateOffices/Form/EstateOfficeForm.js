import { useState } from "react";
import Input from "../../../../../Design/Input/Input";
import Button from "../../../../../Design/Button/Button";
// import multer from 'multer';

import "./EstateOfficeForm.css";

const EstateOfficeForm = ({
  onSubmit,
  isDisabled,
  label,
  initialData = {},
}) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    telephone: "",
    image: null,
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === "checkbox") {
      setData({ ...data, [name]: checked });
    } else if (type === "file") {
      setData({ ...data, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  // const upload = multer({ dest: 'uploads/' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("telephone", data.telephone);
    formData.append("image", data.image);

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="estateOffice-form">
      <label htmlFor="name">Name</label>
      <Input name="name" value={data.name} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <Input name="email" value={data.email} onChange={handleChange} />
      <label htmlFor="telephone">Telephone</label>
      <Input name="telephone" value={data.telephone} onChange={handleChange} />
      <label htmlFor="image">Image</label>
      <Input type="file" name="image" onChange={handleChange} />
      <br />

      <Button type="submit" disabled={isDisabled}>
        {label}
      </Button>
    </form>
  );
};

export default EstateOfficeForm;
