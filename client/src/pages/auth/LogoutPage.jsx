import React from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosRequest, setAccessToken } from '../../services/axiosinstance';
import { AppContext } from "../app/AppContext";


function LogoutPage() {
  const navigate = useNavigate();
const { user, setUser } = useContext(appContext)


  const onHandleLogout = async () => {
    try {
      const { data } = await axiosRequest.delete('/auth/logout');
      console.log(data);
      if (data.message === 'success') {
        setAccessToken(data.accessToken);
        setUser(null);
        navigate('/')
      }
    } catch (error) {
        console.log(error);
    }
  };

  return (
      <div className='logoutContainer'>
        <div className='confirmLogout'>{user?.name}, Вы точно хотите выйти?</div>
        <button className="logoutBtn" onClick={onHandleLogout} type="button">
          Да!
        </button>
        <button className="stayBtn" onClick={() => navigate('/')} type="button">
          Нет, хочу остаться
        </button>
      </div>
  );
}

export default LogoutPage;