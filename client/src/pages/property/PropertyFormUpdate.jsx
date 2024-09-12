import React, { useContext, useState } from "react";
import { axiosRequest } from "../../services/axiosinstance";
import { AppContext } from "../../app/AppContext";
import "./PropertyForm.css"

function PropertyFormUpdate({ property, setActive }) {
  const { categories, setProperties } = useContext(AppContext);
  const [categoryId, setCategoryId] = useState(property.categoryId);
  const [title, setTitle] = useState(property.title);
  const [price, setPrice] = useState(property.price);
  const [description, setDescription] = useState(property.description);
  const [photo, setPhoto] = useState(property.photo);
  const [address, setAddress] = useState(property.address);

  const onHandleUpdateProperty = async (e) => {
    try {
      e.preventDefault();
      const data = new FormData();

      data.append("categoryId", categoryId);
      data.append("title", title);
      data.append("price", price);
      data.append("description", description);
      data.append("photo", photo);
      data.append("address", address);

      const response = await axiosRequest.put(
        `/properties/${property.id}`,
        data,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        setProperties((prev) =>
          prev.map((prop) =>
            prop.id === response.data.property.id
              ? response.data.property
              : prop
          )
        );
        setActive(false);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  return (
    <form onSubmit={onHandleUpdateProperty} className="form">
      <h2>Обновление объявления:</h2>
      <select
        onChange={(e) => setCategoryId(+e.target.value)}
        value={categoryId}
      >
        {categories &&
          categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.title}
            </option>
          ))}
      </select>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        placeholder="title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="title"
      />
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="info"
      />

      <button type="submit">Обновить</button>
    </form>
  );
}

export default PropertyFormUpdate;
