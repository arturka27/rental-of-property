import React from'react';
import './FooterPage.css'
function FooterPage() {
  return (
      <div className='footer'>
        <p className='adress'>
            адрес: Бульвар Угрюмых Уток, офис "Квартирный Базар"
        </p >
        <p className='email'>служба поддержки: apartment_bazaar@ducks.com</p>
      </div>
  );
}

export default FooterPage;