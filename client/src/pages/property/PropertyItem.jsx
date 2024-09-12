import React, { useContext, useState } from "react";
import PropertyFormUpdate from "./PropertyFormUpdate";
import ModalWindow from "../../shared/ui/ModalWindow";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosinstance";

function PropertyItem({ property }) {
  const [active, setActive] = useState(false);
  const { user, setProperties, likedProperties, setLikedProperties } =
    useContext(AppContext);

  // console.log(state, "---------");
  // console.log(liked);

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
        setLikedProperties((prev) => [...prev, response.data.likedProperty])
      }
    } catch (error) {
      console.log(error);
    }
  };

  const delFromLiked = async (propertyId) => {
    try {
      const response = await axiosRequest.delete(`/favorites/${propertyId}`);
      if (response.status === 200) {
        setLikedProperties((prev) => prev.filter((prop) => prop.id !== propertyId))
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(likedProperties);

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
        <p>{property.address}</p>
        <p>{property.description}</p>
        <p>{property.price}</p>
      </div>
      <div>
        {user && user.isAdmin ? (
          <>
            <button onClick={onHandleDelete}>Удалить</button>
            <button onClick={isActive}>Обновить</button>
          </>
        ) : (
          <></>
        )}
        {user && likedProperties.find(({ id }) => id === property.id) ? (
          <>
            <button
              className="like-button liked"
              onClick={() => delFromLiked(property.id)}
            >
              Удалить из избранного
            </button>
          </>
        ) : (
          <>
            <button
              className="like-button"
              onClick={() => addToLiked(property.id)}
            >
              Добавить в избранное
            </button>
          </>
        )}
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
