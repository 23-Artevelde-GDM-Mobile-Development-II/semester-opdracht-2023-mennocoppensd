import { useState } from "react";
import Button from "../../../../Design/Button/Button";
import Input from "../../../../Design/Input/Input";
import './PropertyForm.css'

const PropertyForm = ({ onSubmit, isDisabled, label, initialData = {} }) => {
  const [data, setData] = useState({
  squareMeters: '',
  type: '',
  forSale: false,
  forRent: false,
  estateOffice: '',
  yearBuilt: '',
  street: '',
  number: '',
  municipality: '',
  amountBathrooms: '',
  amountBedrooms: '',
  price: '',
  photos: [],
  isSoldOrRented: false,
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, type, value, checked, selectedOptions, files } = e.target;

    if (type === 'checkbox') {
      setData({ ...data, [name]: checked });
    } else if (type === 'file') {
      setData({ ...data, [name]: files });
    } else if (name === 'type') {
      setData({ ...data, [name]: selectedOptions[0].value });
    } else {
      setData({ ...data, [name]: value });
    }
};

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('squareMeters', data.squareMeters);
    formData.append('type', data.type);
    formData.append('forSale', data.forSale);
    formData.append('forRent', data.forRent);
    formData.append('estatoffice', data.estateOffice);
    formData.append('yearBuilt', data.yearBuilt);
    formData.append('street', data.street);
    formData.append('number', data.number);
    formData.append('municipality', data.municipality);
    formData.append('amountBathrooms', data.amountBathrooms);
    formData.append('amountBedrooms', data.amountBedrooms);
    formData.append('price', data.price);
  
    for (let i = 0; i < data.photos.length; i++) {
      formData.append('photos', data.photos[i]);
    }
  
    onSubmit(formData);
  };

  const handleForSaleClick = (e) => {
    if (data.forSale) {
      setData({ ...data, forSale: false });
    } else {
      setData({ ...data, forSale: true, forRent: false });
    }
  };
  
  const handleForRentClick = (e) => {
    if (data.forRent) {
      setData({ ...data, forRent: false });
    } else {
      setData({ ...data, forRent: true, forSale: false });
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="property-form">
      <label htmlFor="squareMeters">Square Meters</label>
      <Input name="squareMeters" value={data.squareMeters} onChange={handleChange} />
      <label htmlFor="type">Type</label>
      <select name="type" value={data.type} onChange={handleChange} className="property-form-select">
      <option value="house">House</option>
      <option value="apartment">Apartment</option>
      <option value="condo">Condo</option>
    </select>
    <label htmlFor="forSale">For Sale</label>
<Input type="checkbox" name="forSale" checked={data.forSale} onChange={handleForSaleClick} />
<label htmlFor="forRent">For Rent</label>
<Input type="checkbox" name="forRent" checked={data.forRent} onChange={handleForRentClick} />

      <label htmlFor="estateOffice">Estate Office</label>
      <Input name="estateOffice" value={data.estateOffice} onChange={handleChange} />
      <label htmlFor="yearBuilt">Year Built</label>
      <Input name="yearBuilt" value={data.yearBuilt} onChange={handleChange} />
      <label htmlFor="street">Street</label>
      <Input name="street" value={data.street} onChange={handleChange} />
      <label htmlFor="number">Number</label>
      <Input name="number" value={data.number} onChange={handleChange} />
      <label htmlFor="municipality">Municipality</label>
      <Input name="municipality" value={data.municipality} onChange={handleChange} />
      <label htmlFor="amountBedrooms">Amount Bedrooms</label>
      <Input name="amountBedrooms" value={data.amountBedrooms} onChange={handleChange} />
      <label htmlFor="amountBathrooms">Amount Bathrooms</label>
      <Input name="amountBathrooms" value={data.amountBathrooms} onChange={handleChange} />
      <label htmlFor="price">Price</label>
      <Input name="price" value={data.price} onChange={handleChange} />
      <label htmlFor="photos">Photos</label>
      <Input name="photos" value={data.photos} onChange={handleChange} />
      <br />
      
      <Button type="submit" disabled={isDisabled}>
        {label}
      </Button>
    </form>
  );
};

export default PropertyForm;
