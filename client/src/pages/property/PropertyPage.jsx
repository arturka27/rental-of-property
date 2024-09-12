import React, { useContext, useState } from "react";
import ModalWindow from "../../shared/ui/ModalWindow";
import PropertyItem from "./PropertyItem";
import PropertyFormAdd from "./PropertyFormAdd";
import { AppContext } from "../../app/AppContext";
import './PropertyPage.css'

function PropertyPage({ properties, setProperties }) {
  const [active, setActive] = useState(false);

  const { user } = useContext(AppContext);

  const isActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="property-page">
      {user && user.isAdmin && (
        <button onClick={isActive} className="add-property">Добавить объявление</button>
      )}
      <ModalWindow active={active} setActive={setActive}>
        <PropertyFormAdd setProperties={setProperties} />
      </ModalWindow>
      <div  className="properties">
      {properties &&
        properties.map((property) => (
          <PropertyItem
            key={property.id}
            property={property}
            setProperties={setProperties}
          />
        ))}
      </div>
    </div>
  );
}

export default PropertyPage;
