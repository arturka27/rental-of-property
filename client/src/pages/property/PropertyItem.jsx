import React, { useContext, useState } from "react";
import PropertyFormUpdate from "./PropertyFormUpdate";
import ModalWindow from "../../shared/ui/ModalWindow";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosinstance";
import './PropertyItem.css'

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
    <div className="property">
      <h3 className="property-title">{property.title}</h3>
      <div>
        <div className="property-photo">
          <img src={property.photo} alt="property photo" width="100%"/>
        </div>
        <p className="property-info">{property.address}</p>
        <p className="property-info">{property.description}</p>
        <p className="property-info">{property.price}</p>
      </div>
      <div>
        {user && user.isAdmin && (
          <button onClick={onHandleDelete} className="property-button">Удалить</button>
        )}
        {user && user.isAdmin && <button onClick={isActive} className="property-button">Обновить</button>}
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
