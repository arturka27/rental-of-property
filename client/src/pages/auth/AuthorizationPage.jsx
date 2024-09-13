import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosRequest, setAccessToken } from "../../services/axiosinstance";
import { AppContext } from "../../app/AppContext";
import './LogRegPage.css'

function AuthorizationPage() {

const { setUser } = useContext(AppContext)

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shown, setShown] = useState(false);
  const navigate = useNavigate();

  function validation(email, password) {
    if (email.trim() === "" || password.trim() === "") {
      setError("Заполните поле");
      return false;
    }
    return true;
  }

  const onHadleSubmit = async (event) => {
    event.preventDefault();

    if (!validation(email, password)) {
      return;
    }
    try {
      const { data } = await axiosRequest.post("/auth/authorization", {
        email: email.trim(),
        password: password.trim(),
      });
      console.log(data.user);
      if (data.message === "success") {
        setUser(data.user);
        setAccessToken(data.accessToken);
        navigate("/properties");
        return;
      }
    } catch (message) {
      setError(message.response.data.message);
      console.log(message);
    }
  };

  return (
    <>
      <div className="mainForm">

        <form onSubmit={onHadleSubmit} className="regLogForm">
        <h2>Авторизация</h2>
          <input
            type="email"
            onChange={({ target }) => setEmail(target.value)}
            className="maininput"
            placeholder="yourEmail@xxx.com"
            required
          />
          <label className="password-label">
          <input
            type={shown ? "text" : "password"}
            onChange={({ target }) => setPassword(target.value)}
            className="maininput"
            placeholder="Пароль"
            required
          />
          <button className="eye-button" type="button" onClick={() => setShown((prev) => !prev)}>
          👀
          </button>
          </label>

          <div className="error">{error && <p>{error}</p>}</div>
          <button type="submit" className="btn btn-outline-success">
            Войти
          </button>
        </form>
      </div>
    </>
  );
}

export default AuthorizationPage;
