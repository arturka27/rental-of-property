import React, { useContext, useState } from "react";
import PropertyFormUpdate from "./PropertyFormUpdate";
import ModalWindow from "../../shared/ui/ModalWindow";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosInstance";

function PropertyItem({ property, setProperties }) {
  const [active, setActive] = useState(false);

  const { user } = useContext(AppContext);

  const onHandleDelete = async () => {
    try {
      const response = await axiosRequest.delete(`/properties/${property.id}`);
      if (response.status === 200) {
        setProperties((prev) => prev.filter((prop) => prop.id !== property.id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isActive = () => {
    setActive((prev) => !prev);
  };
  return (
    <div>
      <h3>{property.title}</h3>
      <div>
        <div>
          <img src={property.photo} alt="property photo" />
        </div>
        <p>{property.address}</p>
        <p>{property.description}</p>
        <p>{property.price}</p>
      </div>
      <div>
        {user && user.isAdmin && (
          <button onClick={onHandleDelete}>Удалить</button>
        )}
        {user && user.isAdmin && <button onClick={isActive}>Обновить</button>}
        <ModalWindow active={active} setActive={setActive}>
          <PropertyFormUpdate
            property={property}
            setProperties={setProperties}
          />
        </ModalWindow>
      </div>
    </div>
  );
}

export default PropertyItem;
