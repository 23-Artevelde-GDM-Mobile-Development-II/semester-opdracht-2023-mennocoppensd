import { useState } from "react";
import Input from "../../../../../Design/Input/Input";
import Button from "../../../../../Design/Button/Button";
// import multer from 'multer';

import "./CategoryForm.css";

const CategoryForm = ({ onSubmit, isDisabled, label, initialData = {} }) => {
  const [data, setData] = useState({
    name: "",
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

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="category-form">
      <label htmlFor="name">Name</label>
      <Input name="name" value={data.name} onChange={handleChange} />

      <br />

      <Button type="submit" disabled={isDisabled}>
        {label}
      </Button>
    </form>
  );
};

export default CategoryForm;
