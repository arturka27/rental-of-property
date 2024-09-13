import React from'react';
import "./ErrorPage.css"
function ErrorPage() {
  return (
        <div className='error-page' style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404</h1>
            <p>Страница не найдена</p>
            <a className='link-home' href="/properties" >Перейти на главную страницу</a>
            <img width={'250px'} src="https://media.tenor.com/fVuQICSLxu8AAAAi/wolf-dancing-meme-dancing-wolf-meme.gif" />
        </div>
  );
}

export default ErrorPage;