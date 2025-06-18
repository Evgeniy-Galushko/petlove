import { useEffect, useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import PetBlock from "../../components/PetBlock/PetBlock.jsx";
import Title from "../../components/Title/Title.jsx";
import s from "./LoginPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/auth/operations.js";
import { selectToken, selectUser } from "../../redux/auth/selectors.js";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [userDataLogin, setUserDataLogin] = useState({});
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loginRequest(userDataLogin));
    if (token) {
      navigate("/profile");
    }
  }, [userDataLogin, token]);

  return (
    <section className={s.loginSection}>
      <ul className={s.login}>
        <li className={s.petBlock}>
          <PetBlock src="public/dogLoginPc_1x.png" alt="dog">
            <source
              srcSet="/dogLoginMob_1x.png 1x, /dogLoginMob_2x.png 2x"
              media="(max-width: 767px)"
            />
            <source
              srcSet="/dogLoginTab_1x.png 1x, /dogLoginTab_2x.png 2x"
              media="(min-width: 768px) and (max-width: 1279.5px)"
            />
            <source
              srcSet="/dogLoginPc_1x.png 1x, /dogLoginPc_2x.png 2x"
              media="(min-width: 1280px)"
            />

            <img src="/dogLoginMob_1x.png" alt="dog" />
          </PetBlock>
        </li>
        <li className={s.boxLogin}>
          <Title>Log in</Title>
          <LoginForm setUserDataLogin={setUserDataLogin} />
        </li>
      </ul>
    </section>
  );
}
