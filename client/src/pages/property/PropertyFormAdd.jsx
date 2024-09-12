import React, { useContext, useState } from "react";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosinstance";
import "./PropertyForm.css"

function PropertyFormAdd({ setProperties }) {
  const [categoryId, setCategoryId] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [address, setAddress] = useState("");

  const { categories } = useContext(AppContext);

  const onHandleSubmit = async (e) => {
    try {
      e.preventDefault();

      const data = new FormData();

      data.append("categoryId", categoryId);
      data.append("title", title);
      data.append("price", price);
      data.append("description", description);
      data.append("photo", photo);
      data.append("address", address);

      const response = await axiosRequest.post("/properties", data, {
        "Content-Type": "multipart/form-data",
      });

      if (response.status === 201) {
        setProperties((prev) => [...prev, response.data.property]);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };
  return (
    <form onSubmit={onHandleSubmit} className="form">
      <select onChange={(e) => setCategoryId(+e.target.value)}>
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
        type="text"
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

      <button type="submit">Опубликовать</button>
    </form>
  );
}

export default PropertyFormAdd;
