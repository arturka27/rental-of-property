import React, { useContext, useState } from "react";
import ModalWindow from "../../shared/ui/ModalWindow";
import PropertyItem from "./PropertyItem";
import PropertyFormAdd from "./PropertyFormAdd";
import { AppContext } from "../../app/AppContext";
import { useSearchParams } from "react-router-dom";

function PropertyPage() {
  const [active, setActive] = useState(false);
  const [categryId, setCategoryId] = useSearchParams();
  const param = categryId.get("categoryId");

  const { user, properties, setProperties, categories } =
    useContext(AppContext);

  let filtredProperties = [...properties];

  if (param) {
    filtredProperties = filtredProperties.filter(
      (prop) => prop.categoryId === +param
    );
    console.log(properties);
    console.log(filtredProperties);
  }

  const isActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div>
      {user && user.isAdmin && (
        <button onClick={isActive}>Добавить объявление</button>
      )}
      <ModalWindow active={active} setActive={setActive}>
        <PropertyFormAdd setActive={setActive} />
      </ModalWindow>

      {filtredProperties &&
        filtredProperties.map((property) => (
          <PropertyItem key={property.id} property={property} />
        ))}
    </div>
  );
}

export default PropertyPage;
