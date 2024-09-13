import React, { useContext, useState } from "react";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosinstance";
import "./PropertyForm.css"

function PropertyFormAdd({ setActive }) {
  const { categories, setProperties } = useContext(AppContext);
  const [categoryId, setCategoryId] = useState(1);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [address, setAddress] = useState("");

  const onHandleCreateProperty = async (e) => {
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
        setCategoryId("");
        setTitle("");
        setPrice("");
        setDescription("");
        setPhoto("");
        setAddress("");
        setActive(false);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };
  return (
    <form onSubmit={onHandleCreateProperty} className="form">
      <h2>Добавление объявления:</h2>
      <select onChange={(e) => setCategoryId(+e.target.value)} className="select">
        {categories &&
          categories.map((category) => (
            <option value={category.id} key={category.id} className="option">
              {category.title}
            </option>
          ))}
      </select>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="название"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        placeholder="цена"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="описание"
      />
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="адрес"
      />

      <button type="submit">Опубликовать</button>
    </form>
  );
}

export default PropertyFormAdd;
