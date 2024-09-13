import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosRequest, setAccessToken } from "../../services/axiosinstance";
import { AppContext } from "../../app/AppContext";
import "./LogRegPage.css";

function RegistrationPage() {
  const { setUser } = useContext(AppContext);

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [shown, setShown] = useState(false);

  function validation(name, email, password, confirm) {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirm.trim() === ""
    ) {
      setError("Заполните поле");
      return false;
    }
    if (password.trim() !== confirm.trim()) {
      setError("Пароли не совпадают");
      return false;
    }
    return true;
  }

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    if (!validation(name, email, password, confirm)) {
      return;
    }

    try {
      const { data } = await axiosRequest.post("/auth/registration", {
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      });
      if (data.message === "success") {
        setAccessToken(data.accessToken);
        setUser(data.user);
        navigate("/properties");
        return;
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="mainForm">
      <form onSubmit={onHandleSubmit} className="regLogForm">
        <h2>Создать профиль</h2>
        <input
          required
          className="maininput"
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          required
          type="email"
          className="maininput"
          placeholder="email@xxx.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          minLength={5}
        />
        {/* <input
            type={shown? 'text' : 'password'}
            className="maininput"
            placeholder="Пароль"
            value={password}
            required
            minLength={3}
            onChange={(event) => setPassword(event.target.value)}
          /> */}
        {/* <input
          required
          type={shown ? "text" : "password"}
          className="maininput"
          placeholder="Подтвердите пароль"
          value={confirm}
          onChange={(event) => setConfirm(event.target.value)}
        /> */}
        <label className="password-label">
          <input
            type={shown ? "text" : "password"}
            onChange={({ target }) => setPassword(target.value)}
            className="maininput"
            placeholder="Пароль"
            required
          />
          <button
            className="eye-button"
            type="button"
            onClick={() => setShown((prev) => !prev)}
          >
            👀
          </button>
        </label>{" "}
        <label className="password-label">
        <input
          required
          type={shown ? "text" : "password"}
          className="maininput"
          placeholder="Подтвердите пароль"
          value={confirm}
          onChange={(event) => setConfirm(event.target.value)}
        />
          {/* <button
            className="eye-button"
            type="button"
            onClick={() => setShown((prev) => !prev)}
          >
            👀
          </button> */}
        </label>
        <div className="error">{error && <p>{error}</p>}</div>
        <button className="mainFormBtn" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;
