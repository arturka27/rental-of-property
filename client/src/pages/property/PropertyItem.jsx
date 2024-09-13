import React, { useContext, useState } from "react";
import PropertyFormUpdate from "./PropertyFormUpdate";
import ModalWindow from "../../shared/ui/ModalWindow";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosinstance";
import "./PropertyItem.css";
import { useNavigate } from "react-router-dom";


function PropertyItem({ property }) {
  
  const [active, setActive] = useState(false);
  const {
    user,
    setProperties,
    likedProperties,
    setLikedProperties,
    categories,
  } = useContext(AppContext);
    const navigate = useNavigate();

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

  const addToLiked = async (propertyId) => {
    try {
      const response = await axiosRequest.post("/favorites", { propertyId });

      if (response.status === 200) {
        // setLiked(data.likeState);
        setLikedProperties((prev) => [...prev, response.data.likedProperty]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const delFromLiked = async (propertyId) => {
    try {
      const response = await axiosRequest.delete(`/favorites/${propertyId}`);
      if (response.status === 200) {
        setLikedProperties((prev) =>
          prev.filter((prop) => prop.id !== propertyId)
        );
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
        <div>
          <img
            className="property-photo"
            src={property.photo}
            alt="property photo"
            width={"400px"}
            height={'250px'}
          />
        </div>
        <p className="property-info">Адрес: {property.address}</p>
        <p className="property-info">Стоимость в месяц: {property.price}§</p>
      </div>
      <div className="buttons-edit">
        {user && user.isAdmin ? (
          <>
            <button className="property-button" onClick={onHandleDelete}>
              Удалить
            </button>
            <button className="property-button" onClick={isActive}>
              Обновить
            </button>
          </>
        ) : <></>}


        {
          user && !user.isAdmin ?  (
            likedProperties.find(({ id }) => id === property.id) ? (
              <>
                <button
                  className="property-button liked"
                  onClick={() => delFromLiked(property.id)}
                >
                  Удалить из избранного
                </button>
              </>
            ) : (
              <>
                <button
                  className="property-button"
                  onClick={() => addToLiked(property.id)}
                >
                  Добавить в избранное
                </button>
              </>
            )
          
          ):(<></>)
        }

        <button
          onClick={() => {
            navigate(`/properties/${property.id}`);
          }}
          className="property-button"
        >
          Подробнее
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

      );
}

export default PropertyItem;
