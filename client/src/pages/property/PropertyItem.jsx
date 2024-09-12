import React, { useContext, useState } from "react";
import PropertyFormUpdate from "./PropertyFormUpdate";
import ModalWindow from "../../shared/ui/ModalWindow";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosinstance";

function PropertyItem({ property }) {
  const [active, setActive] = useState(false);

  const { user, setProperties, categories } = useContext(AppContext);

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
          <img src={property.photo} alt="property photo" width={"500px"} />
        </div>
        <p>Адрес: {property.address}</p>
        <p>Стоимость в месяц: {property.price}§</p>
      </div>
      <div>
        {user && user.isAdmin && (
          <>
            <button onClick={onHandleDelete}>Удалить объявление</button>
            <button onClick={isActive}>Обновить объявление</button>
          </>
        )}
        <ModalWindow active={active} setActive={setActive}>
          <PropertyFormUpdate
            categories={categories}
            property={property}
            setProperties={setProperties}
            setActive={setActive}
          />
        </ModalWindow>
      </div>
    </div>
  );
}

export default PropertyItem;
