import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logins, Logout } from "./auth/auth.action";
import { store } from "./store";

function Login() {
  const [data, setData] = useState({});

  const { token, isAuth } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      console.log(token);
    }
  }, [isAuth]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (isAuth) {
      dispatch(Logout());
    } else {
      dispatch(Logins(data));
    }
  };
  console.log(data);

  return (
    <>
      <input name="email" onChange={handleChange}></input>
      <input name="password" onChange={handleChange}></input>
      <button onClick={handleClick}>{isAuth ? "logout" : "login"}</button>
    </>
  );
}
export default Login;
