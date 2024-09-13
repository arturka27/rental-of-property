import React, { useContext } from'react';
import './FavoritesPage.css'
import PropertyItem from '../property/PropertyItem';
import { AppContext } from '../../app/AppContext';



function FavoritePage() {
  const { user, likedProperties } = useContext(AppContext);
  return (
    <div className="property-page">
    <div  className="properties">
    {user && likedProperties &&
      likedProperties.map((property) => (
        <PropertyItem key={property.id} property={property} />
      ))}
    </div>
  </div>
  );
}

export default FavoritePage;