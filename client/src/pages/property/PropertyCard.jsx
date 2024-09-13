import React, { useContext, useEffect, useState } from "react";
import PropertyFormUpdate from "./PropertyFormUpdate";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosinstance";
import { useNavigate, useParams } from "react-router-dom";
import ModalWindow from "../../shared/ui/ModalWindow";
import "./PropertyCard.css";

function PropertyCard() {
  const [active, setActive] = useState(false);
  const [property, setProperty] = useState(undefined);
  const { user, setProperties, categories } = useContext(AppContext);
  const { propertyId } = useParams();

  const navigate = useNavigate();

  const onHandleGetProperty = async () => {
    try {
      const response = await axiosRequest.get(`/properties/${propertyId}`);
      if (response.status === 200) {
        setProperty(response.data.property);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleDelete = async () => {
    try {
      const response = await axiosRequest.delete(`/properties/${property.id}`);
      if (response.status === 200) {
        setProperties((prev) => prev.filter((prop) => prop.id !== property.id));
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onHandleGetProperty();
  }, [active]);

  const isActive = () => {
    setActive((prev) => !prev);
  };
  return (
    <>
      {property && (
        <div className="property-card">
          <div className="card-photo">
            <div>
              <img
                className="card-property-photo"
                src={property.photo}
                alt="property photo"
                width={"700px"}
                // height={"400px"}
              />
            </div>
            </div>

            <div className="card-info">
            <h3 className="card-property-title">{property.title}</h3>
              <p className="card-property-info">Адрес: {property.address}</p>
              <p className="card-property-info">
                Описание: {property.description}
              </p>
              <p className="card-property-info">
                Стоимость в месяц: {property.price}§
              </p>
              <div className="buttons-edit">
              {user && user.isAdmin && (
                <>
                  <button onClick={onHandleDelete} className="property-button">
                    Удалить объявление
                  </button>
                  <button onClick={isActive} className="property-button">
                    Обновить объявление
                  </button>
                </>
              )}
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="property-button"
              >
                Назад
              </button>

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

          </div>
      )}
    </>
  );
}

export default PropertyCard;
