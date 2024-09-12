import React, { useContext, useState } from "react";
import ModalWindow from "../../shared/ui/ModalWindow";
import PropertyItem from "./PropertyItem";
import PropertyFormAdd from "./PropertyFormAdd";
import { AppContext } from "../../app/AppContext";

function PropertyPage() {
  const [active, setActive] = useState(false);

  const { user, properties, setProperties, categories } =
    useContext(AppContext);

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

      {properties &&
        properties.map((property) => (
          <PropertyItem key={property.id} property={property} />
        ))}
    </div>
  );
}

export default PropertyPage;
